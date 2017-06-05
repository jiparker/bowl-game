import * as types from '../constants/actionTypes';

export function setupWorkstations(settings, value) {
  return {
    type: types.SETUP_WORKSTATIONS,
    settings,
    value
  };
}
