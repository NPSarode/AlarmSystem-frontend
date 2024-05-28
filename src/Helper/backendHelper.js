import { del, get, post, put } from "./apiHelper";
import * as url from "./urlHelper";

// ALARM
export const getAlarmById = id => get(url.GET_ALARM_BY_ID_SUCCESS + `/${id}`)
export const deleteAlarm = id => del(url.DELETE_ALARM + `/${id}`)
export const getAlarmTypes = () => get(url.GET_ALARM_TYPES)
export const addAlarm = (data) => post(url.ADD_ALARM, data)
export const updateAlarm = (data) => put(url.UPDATE_ALARM, data)


export const getMachines = () => get(url.GET_MACHINES)


export const getUsers = () => get(url.GET_USERS)
