import * as types from '../constants/actionTypes';

export function setupWorkstations(settings, fieldName, value) {
  return {
    type: types.SETUP_WORKSTATIONS,
    settings,
    fieldName,
    value
  };
}
