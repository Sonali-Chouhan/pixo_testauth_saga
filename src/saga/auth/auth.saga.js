import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGOUT_USERS, LOGOUT_USERS_SUCCESS } from './auth.type';


function* LoginUsers(action) {
  yield put({
    type: LOGIN_USER_SUCCESS,
    payload: action.payload
  })
  // for api calling
  // try {
  //   const res = yield call(instance.post, "/login", action.payload);

  //   yield put({
  //     type: LOGIN_USER_SUCCESS,
  //     payload: res.data,
  //   });
  // } catch (error) {
  //   yield put({
  //     type: ERROR,
  //     payload: error,
  //   });
  // }
}
function* LogoutUsers(action) {
  yield put({
    type: LOGOUT_USERS_SUCCESS,
    payload: action.payload
  })
}
export default function* LoginSaga() {
  yield takeEvery(LOGIN_USER, LoginUsers)
  yield takeEvery(LOGOUT_USERS, LogoutUsers)
}
