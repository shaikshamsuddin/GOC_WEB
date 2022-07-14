import gamesReducer from './gamesReducer'
import users from './users';
import { combineReducers } from "redux";

const reducers = combineReducers({
  gamesReducer,
  users
});

export default reducers;
