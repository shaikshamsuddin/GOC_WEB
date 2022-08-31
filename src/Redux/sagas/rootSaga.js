import { all } from "redux-saga/effects";
import {loginUserSaga,getGamesSaga,getRolesSaga,mergeGamesSaga,mergeRolesSaga,getUsersSaga,
  registerUserSaga,
  fetchTeamsSaga,
  mergeTeamSaga,
  uploadTeamLogoSaga,
  getUsersForCreateTeamSaga,
  getWildSearchSaga} from "./handlers/fetchUsers";

export default function* rootSaga() {
  yield all([
    loginUserSaga(),
    getGamesSaga(),
    getRolesSaga(),
    mergeGamesSaga(),
    mergeRolesSaga(),
    getUsersSaga(),
    registerUserSaga(),
    fetchTeamsSaga(),
    mergeTeamSaga(),
    uploadTeamLogoSaga(),
    getUsersForCreateTeamSaga(),
    getWildSearchSaga()
  ]);
}
