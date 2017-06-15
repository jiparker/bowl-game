import { SETUP_WORKSTATIONS } from '../constants/actionTypes';
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
        newState.workstations.push({ id: i + 1 });
      }

      return newState;

    default:
      return state;
  }
}
