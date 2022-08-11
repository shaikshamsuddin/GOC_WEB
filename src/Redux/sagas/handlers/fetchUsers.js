import { call, put, takeEvery, takeLatest,actionChannel, take, apply} from "redux-saga/effects";
import fetchGetUsers from "../requests/fetchUsers";
import {actionTypes} from "../../actions/actionTypes"
import { getResponse } from "../requests/handleRequest";
import {setLoginResponse,setGames,setRoles,setMergeGames,setMergeRoles, setUsers, setRegisterResponse} from '../../actions';

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
      console.log(data.data.status,"data games");
      yield put(setMergeGames(data.data.status));
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
      console.log(data, "data response status")
      yield put(setMergeRoles(data));
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