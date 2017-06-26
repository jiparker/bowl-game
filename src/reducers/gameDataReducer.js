import { SETUP_WORKSTATIONS, SET_ITERATION_COUNT, RUN_ITERATIONS, RUN_TURNS } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function gameDataReducer(state = initialState.gameData, action) {
  let newState;

  switch (action.type) {
    case SETUP_WORKSTATIONS:
      {
        let getRandomInt = (min, max) => {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        };

        newState = objectAssign({}, state);
        newState[action.fieldName] = action.value;

        newState.workstations = [];
        for (let i = 0; i < newState.workstationCount; i++) {
          let ws = { id: i + 1, queueSize: 0, incomingQueueSize: 0, imageNumber: getRandomInt(1, 10) };
          if (i == 0) { ws.queueSize = 2000; }
          newState.workstations.push(ws);
        }
        return newState;
      }
    case SET_ITERATION_COUNT:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      return newState;

    case RUN_ITERATIONS:
      {
        //new state
        newState = objectAssign({}, state);
        let newWorkstations = state.workstations.map((w) => {
          return { ...w };
        });

        for (let i = 0; i < state.iterationCount; i++) {
          newState.runsCount++;

          //reset current Incoming queue size
          for (let j = 0; j < state.workstationCount; j++) {
            newWorkstations[j].incomingQueueSize = 0;
          }

          for (let j = 0; j < state.workstationCount; j++) {
            let addToNextBucket = (itemCountToAdd) => {
              if (j == newState.workstationCount - 1) {
                newState.doneCount += itemCountToAdd;
              } else {
                newWorkstations[j + 1].incomingQueueSize += itemCountToAdd;
              }
              return;
            };

            // let currentCapacity = newState.workstations[j].variantCapacity
            let currentCapacity = 1;
            if (newWorkstations[j].queueSize >= currentCapacity) {
              addToNextBucket(currentCapacity);
              newWorkstations[j].queueSize -= currentCapacity;
            } else if (newWorkstations[j].queueSize < currentCapacity) {
              addToNextBucket(newWorkstations[j].queueSize);
              newWorkstations[j].queueSize = 0;
            } else {
              newWorkstations[j].queueSize = 0;
            }
          }
          //make incoming queue size available
          for (let j = 0; j < state.workstationCount; j++) {
            newWorkstations[j].queueSize += newWorkstations[j].incomingQueueSize;
          }
        }
        newState['workstations'] = newWorkstations;
        return newState;
      }

    case RUN_TURNS:
      {
        //new state
        newState = objectAssign({}, state);
        let newWorkstations = state.workstations.map((w) => {
          return { ...w };
        });

        for (let i = 0; i < state.iterationCount; i++) {

          let addToNextBucket = (itemCountToAdd) => {
            if (newState.currentWorkstation == newState.workstationCount - 1) {
              newState.doneCount += itemCountToAdd;
            } else {
              newWorkstations[newState.currentWorkstation + 1].queueSize += itemCountToAdd;
            }
            return;
          };

          // let currentCapacity = newState.workstations[j].variantCapacity
          let currentCapacity = 1;
          if (newWorkstations[newState.currentWorkstation].queueSize >= currentCapacity) {
            addToNextBucket(currentCapacity);
            newWorkstations[newState.currentWorkstation].queueSize -= currentCapacity;
          } else if (newWorkstations[newState.currentWorkstation].queueSize < currentCapacity) {
            addToNextBucket(newWorkstations[newState.currentWorkstation].queueSize);
            newWorkstations[newState.currentWorkstation].queueSize = 0;
          } else {
            newWorkstations[newState.currentWorkstation].queueSize = 0;
          }
          //set next current workstation
          if (newState.currentWorkstation == newState.workstationCount - 1) {
            newState.currentWorkstation = 0;
          } else {
            newState.currentWorkstation += 1;
          }
        }
        newState['workstations'] = newWorkstations;
        return newState;

      }

    default:
      return state;
  }
}
