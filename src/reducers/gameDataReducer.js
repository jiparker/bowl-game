import { SETUP_WORKSTATIONS, SET_ITERATION_COUNT, RUN_ITERATIONS } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function gameDataReducer(state = initialState.gameData, action) {
  let newState;

  switch (action.type) {
    case SETUP_WORKSTATIONS:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;

      newState.workstations = [];
      for (let i = 0; i < newState.workstationCount; i++) {
        let ws = { id: i + 1, queueSize: 0, incomingQueueSize: 0 };
        if (i == 0) { ws.queueSize = 13; }
        newState.workstations.push(ws);
      }
      return newState;

    case SET_ITERATION_COUNT:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      return newState;

    case RUN_ITERATIONS:
      {
        newState = objectAssign({}, state);
        let newWorkstations = state.workstations.map((w) => {
          return { ...w };
        });

        for (let i = 0; i < state.iterationCount; i++) {
          newState.runsCount++;
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
          for (let j = 0; j < state.workstationCount; j++) {
            newWorkstations[j].queueSize += newWorkstations[j].incomingQueueSize;
          }
        }
        newState['workstations'] = newWorkstations;
        return newState;
      }
    default:
      return state;
  }
}
