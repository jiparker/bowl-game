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

export function runTurn(settings) {
  return {
    type: types.ROLL,
    settings
  };
}

export function runTurns(settings) {
  return {
    type: types.RUN_TURNS,
    settings
  };
}

export function timerStart(timer) {
  return {
    type: types.TIMER_START,
    timer
  };
}
export function timerTrigger(timer) {
  return {
    type: types.RUN_TURN,
    timer
  };
}
export function timerStop(timer) {
  return {
    type: types.TIMER_STOP,
    timer
  };
}
