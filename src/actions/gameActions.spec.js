import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './gameActions';

describe('Actions', () => {

  const appState = {
    workstationCount: 0
  };
  it('should create an action to setup workstations', () => {
    const value = 10;
    const actual = ActionCreators.setupWorkstations(appState, value);
    const expected = {
      type: ActionTypes.SETUP_WORKSTATIONS,
      settings: appState,
      value
    };

    expect(actual).toEqual(expected);
  });
});
