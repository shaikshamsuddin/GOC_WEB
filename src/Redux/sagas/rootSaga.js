import { all } from "redux-saga/effects";
import { getTeamsFromLeague } from "Redux/actions";
import {loginUserSaga,getGamesSaga,getRolesSaga,mergeGamesSaga,mergeRolesSaga,getUsersSaga,
  registerUserSaga,
  fetchTeamsSaga,
  mergeTeamSaga,
  uploadTeamLogoSaga,
  getUsersForCreateTeamSaga,
  getWildSearchSaga,
  deleteTeamSaga,
  deletePlayerSaga,
  mergeLeagueSaga,
  getLeaguesSaga,
  addTeamsToLeagueSaga,
  fetchTeamsFromLeagueSaga
  } from "./handlers/fetchUsers";

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
    getWildSearchSaga(),
    deleteTeamSaga(),
    deletePlayerSaga(),
    mergeLeagueSaga(),
    getLeaguesSaga(),
    addTeamsToLeagueSaga(),
    fetchTeamsFromLeagueSaga()
  ]);
}
