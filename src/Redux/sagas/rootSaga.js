import { all } from "redux-saga/effects";
import {loginUserSaga} from "./handlers/fetchUsers";

export default function* rootSaga() {
  yield all([
    loginUserSaga(),
    
  ]);
}
