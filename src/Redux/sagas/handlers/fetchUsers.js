import { call, put, takeEvery, takeLatest,actionChannel, take, apply} from "redux-saga/effects";
import fetchGetUsers from "../requests/fetchUsers";
import {actionTypes} from "../../actions/actionTypes"
import { getResponse } from "../requests/handleRequest";
import {setUser} from '../../actions';
function* handleGetUsers() {
  try {
    const users = yield call(fetchGetUsers);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (err) {
    yield put({ type: "GET_USERS_FAILED", message: err.message });
  }
}

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
      yield put(setUser(data.data));
    }
  }
}


