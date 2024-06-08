import { call, put, takeEvery } from 'redux-saga/effects';
import instance from '../../BaseUrl/BaseUrl';
import {} from './dashboard.type';
import { DASHBOARD_USER_SUCCESS } from './admin.type';
//add api last point
function* DataGetDashboard(action) {
  try {
    const res = yield call(instance.get, "/");
    yield put({
      type: DASHBOARD_USER_SUCCESS,
      payload: res
    });
  } catch (error) {
    yield put({
      type: "ERROR",
      payload: error
    });
  }
}

export default function* DashboardSaga() {
  yield takeEvery(DASHBOARD_USER_SUCCESS, DataGetDashboard);
}
