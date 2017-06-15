import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './gameActions';

describe('Actions', () => {

  const appState = {
    workstationCount: 0
  };
  it('should create an action to setup workstations', () => {
    const value = 10;
    const fieldName = 'workstationCount';
    const actual = ActionCreators.setupWorkstations(appState, fieldName, value);
    const expected = {
      type: ActionTypes.SETUP_WORKSTATIONS,
      settings: appState,
      fieldName,
      value
    };

    expect(actual).toEqual(expected);
  });
});
