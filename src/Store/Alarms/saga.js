import { call, put, takeEvery } from "redux-saga/effects";

import { AddAlarmFail, AddAlarmSuccess, UpdateAlarmFail, UpdateAlarmSuccess, deleteAlarmFail, deleteAlarmSuccess, getActiveAlarmsFail, getActiveAlarmsSuccess, getAlarmHistoryFail, getAlarmHistorySuccess, getAlarmTypesFail, getAlarmTypesSuccess, getAlarmsByIdFail, getAlarmsByIdSuccess } from "./action";
import { addAlarm, deleteAlarm, getActiveAlarm, getAlarmById, getAlarmHistory, getAlarmTypes, updateAlarm } from "../../Helper/backendHelper";
import { ADD_ALARM, DELETE_ALARM, GET_ACTIVE_ALARMS, GET_ALARM_BY_ID, GET_ALARM_HISTORY, GET_ALARM_TYPES, UPDATE_ALARM } from "./actionTypes";


function* onGetAlarmsById({ payload: id }) {
  try {
    const response = yield call(getAlarmById, id);
    yield put(getAlarmsByIdSuccess(response));
  } catch (error) {
    yield put(getAlarmsByIdFail(error));
  }
}

function* onDeleteAlarm({ payload: id }) {
  try {
    // eslint-disable-next-line
    const response = yield call(deleteAlarm, id);
    yield put(deleteAlarmSuccess(id));
  } catch (error) {
    yield put(deleteAlarmFail(error));
  }
}

function* onGetAlarmTypes() {
  try {
    const response = yield call(getAlarmTypes);
    yield put(getAlarmTypesSuccess(response));
  } catch (error) {
    yield put(getAlarmTypesFail(error));
  }
}

function* onAddAlarm({payload: data}) {
  try {
    const response = yield call(addAlarm,data);
    yield put(AddAlarmSuccess(response));
  } catch (error) {
    yield put(AddAlarmFail(error));
  }
}

function* onUpdateAlarm({payload: data}) {
  try {
    const response = yield call(updateAlarm,data);
    yield put(UpdateAlarmSuccess(response));
  } catch (error) {
    yield put(UpdateAlarmFail(error));
  }
}

function* onGetActiveAlarm() {
  try {
    const response = yield call(getActiveAlarm);
    yield put(getActiveAlarmsSuccess(response));
  } catch (error) {
    yield put(getActiveAlarmsFail(error));
  }
}

function* onGetAlarmHistory() {
  try {
    const response = yield call(getAlarmHistory);
    yield put(getAlarmHistorySuccess(response));
  } catch (error) {
    yield put(getAlarmHistoryFail(error));
  }
}


function* alarmSaga() {
  yield takeEvery(GET_ALARM_BY_ID, onGetAlarmsById);
  yield takeEvery(DELETE_ALARM, onDeleteAlarm);
  yield takeEvery(GET_ALARM_TYPES, onGetAlarmTypes);
  yield takeEvery(ADD_ALARM, onAddAlarm);
  yield takeEvery(UPDATE_ALARM, onUpdateAlarm);
  yield takeEvery(GET_ACTIVE_ALARMS, onGetActiveAlarm);
  yield takeEvery(GET_ALARM_HISTORY, onGetAlarmHistory);
}

export default alarmSaga;
