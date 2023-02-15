import { call, put, takeEvery, takeLatest,actionChannel, take, apply} from "redux-saga/effects";
import fetchGetUsers from "../requests/fetchUsers";
import {actionTypes} from "../../actions/actionTypes"
import { getResponse } from "../requests/handleRequest";
import {setLoginResponse,setGames,setRoles,setMergeGames,setMergeRoles, setUsers, setRegisterResponse, setTeams, setResponseMergeTeam, setUploadTeamLogo, setUsersForCreateTeam, setWildSearchPlayers, deleteTeamRes, deletePlayerRes,mergeLeagueRes, setLeagues, addTeamsToLeague } from '../../actions';

export function* loginUserSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.LOGIN_USER);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setLoginResponse(data.status));
    }
  }
}
export function* getGamesSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.GET_GAMES);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setGames(data.data));
    }
  }
}
export function* getRolesSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.GET_ROLES);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setRoles(data.data));
    }
  }
}
export function* mergeGamesSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.MERGE_GAMES);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setMergeGames(data.status));
    }
  }
}

export function* mergeRolesSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.MERGE_ROLES);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setMergeRoles(data.status));
    }
  }
}
export function* getUsersSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.GET_USERS);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setUsers(data.data));
    }
  }
}
export function* registerUserSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.REGISTER_USER);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setRegisterResponse(data.status));
    }
  }
}


export function* fetchTeamsSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.GET_TEAMS);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setTeams(data.data));
    }
  }
}

export function* mergeTeamSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.MERGE_TEAM);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setResponseMergeTeam(data.status));
    }
  }
}

export function* uploadTeamLogoSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.UPLOAD_TEAM_LOGO);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setUploadTeamLogo(data));
    }
  }
}
export function* getUsersForCreateTeamSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.GET_USERS_FOR_CREATETEAM);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setUsersForCreateTeam(data.data));
    }
  }
}
export function* getWildSearchSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.WILD_SEARCH_PLAYERS);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setWildSearchPlayers(data.data));
    }
  }
}
export function* deleteTeamSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.DELETE_TEAM);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(deleteTeamRes(data.status));
    }
  }
}
export function* deletePlayerSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.DELETE_PLAYER);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(deletePlayerRes(data.status));
    }
  }
}

export function* mergeLeagueSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.MERGE_LEAGUE);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(mergeLeagueRes(data.status));
    }
  }
}

export function* getLeaguesSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.GET_LEAGUES);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(setLeagues(data.data));
    }
  }
}

export function* addTeamsToLeagueSaga() {
  // yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  const reqBuffer = yield actionChannel(actionTypes.SET_ADD_TEAM_TO_LEAGUE);
  while (true){
    const action = yield take(reqBuffer);
    const payload = action.payload;
    const params = {
      actionType: action.type,
      payload,
      method:"POST"
    }

    const response = yield call(getResponse,params);
    const data = yield apply(response,response.json,[response]);
    if(data !== null || data !== undefined){
      yield put(addTeamsToLeague(data.status));
    }
  }
}