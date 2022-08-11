import { all } from "redux-saga/effects";
import {loginUserSaga,getGamesSaga,getRolesSaga,mergeGamesSaga,mergeRolesSaga,getUsersSaga,
  registerUserSaga} from "./handlers/fetchUsers";

export default function* rootSaga() {
  yield all([
    loginUserSaga(),
    getGamesSaga(),
    getRolesSaga(),
    mergeGamesSaga(),
    mergeRolesSaga(),
    getUsersSaga(),
    registerUserSaga()
    
  ]);
}
