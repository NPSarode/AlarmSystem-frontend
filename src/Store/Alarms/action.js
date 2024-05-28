import { ADD_ALARM, ADD_ALARM_FAIL, ADD_ALARM_SUCCESS, DELETE_ALARM, DELETE_ALARM_FAIL, DELETE_ALARM_SUCCESS, GET_ALARM_BY_ID, GET_ALARM_BY_ID_FAIL, GET_ALARM_BY_ID_SUCCESS, GET_ALARM_TYPES, GET_ALARM_TYPES_FAIL, GET_ALARM_TYPES_SUCCESS, UPDATE_ALARM, UPDATE_ALARM_FAIL, UPDATE_ALARM_SUCCESS } from "./actionTypes"

// getAlarmsById
export const getAlarmsById = (id) => {
    return {
        type: GET_ALARM_BY_ID,
        payload: id
    }
}

export const getAlarmsByIdSuccess = (data) => {
    return {
        type: GET_ALARM_BY_ID_SUCCESS,
        payload: data
    }
}

export const getAlarmsByIdFail = (data) => {
    return {
        type: GET_ALARM_BY_ID_FAIL,
        payload: data
    }
}

// deleteAlarm
export const deleteAlarm = (id) => {
    return {
        type: DELETE_ALARM,
        payload: id
    }
}

export const deleteAlarmSuccess = (id) => {
    return {
        type: DELETE_ALARM_SUCCESS,
        payload: id
    }
}

export const deleteAlarmFail = (data) => {
    return {
        type: DELETE_ALARM_FAIL,
        payload: data
    }
}

// getAlarmTypes
export const getAlarmTypes = () => {
    return {
        type: GET_ALARM_TYPES,
    }
}

export const getAlarmTypesSuccess = (data) => {
    return {
        type: GET_ALARM_TYPES_SUCCESS,
        payload: data
    }
}

export const getAlarmTypesFail = (data) => {
    return {
        type: GET_ALARM_TYPES_FAIL,
        payload: data
    }
}

// AddAlarm
export const AddAlarm = (data) => {
    return {
        type: ADD_ALARM,
        payload: data
    }
}

export const AddAlarmSuccess = (data) => {
    return {
        type: ADD_ALARM_SUCCESS,
        payload: data
    }
}

export const AddAlarmFail = (data) => {
    return {
        type: ADD_ALARM_FAIL,
        payload: data
    }
}

// UpdateAlarm
export const UpdateAlarm = (data) => {
    return {
        type: UPDATE_ALARM,
        payload: data
    }
}

export const UpdateAlarmSuccess = (data) => {
    return {
        type: UPDATE_ALARM_SUCCESS,
        payload: data
    }
}

export const UpdateAlarmFail = (data) => {
    return {
        type: UPDATE_ALARM_FAIL,
        payload: data
    }
}
