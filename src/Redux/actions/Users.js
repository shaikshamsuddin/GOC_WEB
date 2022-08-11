import { actionTypes } from "./actionTypes";

export const loginUser = (payload)=>{
    return {
        type: actionTypes.LOGIN_USER,
        payload
    }
}
export const setLoginResponse = (payload)=>{
    return {
        type: actionTypes.SET_USER,
        payload
    }
}
export const registerUser = (payload)=>{
    return{
        type : actionTypes.REGISTER_USER,
        payload
    }
}
export const setRegisterResponse = (payload) =>{
    return{
        type : actionTypes.SET_REGISTER_RESPONSE,
        payload
    }
}