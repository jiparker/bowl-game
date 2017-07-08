import { SETUP_WORKSTATIONS, RUN_TURN, ROLL, TIMER_START, TIMER_TRIGGER } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import workstationHelper from '../utils/workstationHelper';

export default function gameDataReducer(state = initialState.gameData, action) {
  const SPINNING = "spinning";
  const NOT_SPINNING = "not spinning";
  let newState;

  switch (action.type) {
    case TIMER_START:
      {
        let newWorkstation = { ...state.workstations[state.currentWorkstationId], dice: { status: SPINNING } };
        return Object.assign({}, state, {
          timer: action.timer,
          continue: false,
          workstations: workstationHelper().update(state.workstations, state.currentWorkstationId, newWorkstation)
        });
      }
    case TIMER_TRIGGER:
      {
        let newWorkstation = { ...state.workstations[state.currentWorkstationId], dice: { status: NOT_SPINNING } };
        return Object.assign({}, state, {
          timer: action.timer,
          workstations: workstationHelper().update(state.workstations, state.currentWorkstationId, newWorkstation)
        });
      }
    case SETUP_WORKSTATIONS:
      {
        let randomNumbers = workstationHelper().shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        let getRandomInt = (index) => {
          index = index % 10;
          return randomNumbers[index];
        };

        newState = objectAssign({}, state);
        newState[action.fieldName] = action.value;

        newState.workstations = [];
        for (let i = 0; i < newState.workstationCount; i++) {
          let ws = { id: i + 1, queueSize: 0, newInQueue: 0, imageNumber: getRandomInt(i), variantCapacity: 1, dice: { status: "no dice" } };
          if (i == 0) { ws.queueSize = 2000; }
          newState.workstations.push(ws);
        }
        return newState;
      }

    case ROLL:
      {
        newState = objectAssign({}, state);
        newState.continue = true;
        newState.isIterations = action.isIterations;
        return newState;
      }
    case RUN_TURN:
      {
        let multiplier = state.isIterations ? state.workstationCount : 1;
        newState = objectAssign({}, state);

        let newCurrentWorkstation = objectAssign({}, state.workstations[newState.currentWorkstationId]);
        let newNextWorkstation = objectAssign({}, state.workstations[newState.currentWorkstationId + 1]);

        newCurrentWorkstation.dice = { status: NOT_SPINNING };

        let addToNextBucket = (itemCountToAdd) => {
          newCurrentWorkstation.newInQueue = 0;
          if (newState.currentWorkstationId == newState.workstationCount - 1) {
            newState.doneCount += itemCountToAdd;
            newState.newInDone = itemCountToAdd;
          } else {
            newNextWorkstation.queueSize += itemCountToAdd;
            newNextWorkstation.newInQueue = itemCountToAdd;
          }
          return;
        };

        let currentCapacity = workstationHelper().getRandomDiceRoll();
        newCurrentWorkstation.variantCapacity = currentCapacity;
        if (newCurrentWorkstation.queueSize >= currentCapacity) {
          addToNextBucket(currentCapacity);
          newCurrentWorkstation.queueSize -= currentCapacity;
        } else if (newCurrentWorkstation.queueSize < currentCapacity) {
          addToNextBucket(newCurrentWorkstation.queueSize);
          newCurrentWorkstation.queueSize = 0;
        } else {
          newCurrentWorkstation.queueSize = 0;
        }

        newState.workstations = workstationHelper().update(state.workstations, state.currentWorkstationId, newCurrentWorkstation);

        //increment runsCount/iteration number if at last workstation
        if (newState.currentWorkstationId == newState.workstationCount - 1) {
          newState.runsCount += 1;
        }

        //set next current workstation
        if (newState.currentWorkstationId == newState.workstationCount - 1) {
          newState.currentWorkstationId = 0;
        } else {
          newState.currentWorkstationId += 1;
        }

        if (newState.currentTurnOfIterationCount === newState.iterationCount * multiplier) {
          newNextWorkstation.dice = { status: "no dice" };
          newState.currentTurnOfIterationCount = 1;
        } else {
          newState.continue = true;
          newState.currentTurnOfIterationCount += 1;
        }
        newState.workstations = workstationHelper().update(newState.workstations, newState.currentWorkstationId, newNextWorkstation);

        return newState;
      }
    default:
      return state;
  }
}
