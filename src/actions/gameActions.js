import * as types from '../constants/actionTypes';

export function setupWorkstations(settings, fieldName, value) {
  return {
    type: types.SETUP_WORKSTATIONS,
    settings,
    fieldName,
    value
  };
}

export function setIterationCount(settings, fieldName, value) {
  return {
    type: types.SET_ITERATION_COUNT,
    settings,
    fieldName,
    value
  };
}

export function runIterations(settings) {
  return {
    type: types.RUN_ITERATIONS,
    settings
  };
}

export function runTurns(settings) {
  return {
    type: types.RUN_TURNS,
    settings
  };
}
