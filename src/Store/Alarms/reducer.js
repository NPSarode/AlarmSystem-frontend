import { ADD_ALARM_FAIL, ADD_ALARM_SUCCESS, DELETE_ALARM_FAIL, DELETE_ALARM_SUCCESS, GET_ACTIVE_ALARMS_FAIL, GET_ACTIVE_ALARMS_SUCCESS, GET_ALARM_BY_ID_FAIL, GET_ALARM_BY_ID_SUCCESS, GET_ALARM_HISTORY_SUCCESS, GET_ALARM_TYPES_FAIL, GET_ALARM_TYPES_SUCCESS, UPDATE_ALARM_FAIL, UPDATE_ALARM_SUCCESS } from "./actionTypes";

const initialState = {
    error: {},
    alarm: [],
    alarm_types: [],
    active_alarms: [],
    alarm_history: [], 
  }

const alarmReducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_ALARM_BY_ID_SUCCESS: 
        return {
            ...state,
            alarm: action.payload,
            error: {}
        }
        case GET_ALARM_BY_ID_FAIL: 
        return {
            ...state,
            error: action.payload
        }

        case DELETE_ALARM_SUCCESS: 
        return {
            ...state,
            alarm: state.alarm.filter(data => {
                if(data.id !== action.payload)
                    return data
            }),
            error: {}
        }
        case DELETE_ALARM_FAIL: 
        return {
            ...state,
            error: action.payload
        }

        case ADD_ALARM_SUCCESS: 
        return {
            ...state,
            alarm: [action.payload, ...state.alarm],
            error: {}
        }
        case ADD_ALARM_FAIL: 
        return {
            ...state,
            error: action.payload
        }

        case UPDATE_ALARM_SUCCESS: 
        return {
            ...state,
            alarm: state.alarm.filter(data => {
                if(data.id === action.payload) {
                    return action.payload
                } else {
                    return data
                }
            }),
            error: {}
        }
        case UPDATE_ALARM_FAIL: 
        return {
            ...state,
            error: action.payload
        }

        case GET_ALARM_TYPES_SUCCESS: 
        return {
            ...state,
            alarm_types: action.payload,
            error: {}
        }
        case GET_ALARM_TYPES_FAIL: 
        return {
            ...state,
            error: action.payload
        }
        
        case GET_ACTIVE_ALARMS_SUCCESS: 
        return {
            ...state,
            active_alarms: action.payload,
            error: {}
        }
        case GET_ACTIVE_ALARMS_FAIL: 
        return {
            ...state,
            error: action.payload
        }
        
        case GET_ALARM_HISTORY_SUCCESS: 
        return {
            ...state,
            alarm_history: action.payload,
            error: {}
        }
        case GET_ALARM_HISTORY_SUCCESS: 
        return {
            ...state,
            error: action.payload
        }
        
        default: 
        return state
    }
}

export default alarmReducer