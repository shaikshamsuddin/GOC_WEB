import { actionTypes } from "./actionTypes";

export const loginUser = (payload)=>{
    return {
        type: actionTypes.LOGIN_USER,
        payload
    }
}
export const setUser = (payload)=>{
    return {
        type: actionTypes.SET_USER,
        payload
    }
}