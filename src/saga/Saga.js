import { all } from "redux-saga/effects";
import LoginSaga from "./auth/auth.saga";
export default function* rootSaga() {
  yield all([
    LoginSaga(),
  ])
}