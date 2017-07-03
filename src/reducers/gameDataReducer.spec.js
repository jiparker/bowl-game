import * as ActionTypes from '../constants/actionTypes';
import reducer from './gameDataReducer';

describe('Reducers::GameData', () => {
  const getInitialState = () => {
    return { "currentTurnOfIterationCount": 1, "currentWorkstationId": 0, "doneCount": 0, "iterationCount": 1, "runsCount": 0, "workstationCount": "", "workstations": [] };
  };

  const getAppState = () => {
    return {
      workstationCount: 21,
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle SETUP_WORKSTATIONS', () => {
    const action = { type: ActionTypes.SETUP_WORKSTATIONS, settings: getAppState(), fieldName: 'workstationCount', value: 21 };

    const expectedCount = 21;

    expect(reducer(getAppState(), action).workstationCount).toEqual(expectedCount);
  });
});
