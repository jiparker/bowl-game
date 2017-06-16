import { combineReducers } from 'redux';
import gameData from './gameDataReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  gameData,
  routing: routerReducer
});

export default rootReducer;
