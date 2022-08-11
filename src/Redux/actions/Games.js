import { actionTypes } from "./actionTypes";

export const getGames = (payload)=>{
    return {
        type: actionTypes.GET_GAMES,
        payload
    }
}
export const setGames = (payload)=>{
    return {
        type: actionTypes.SET_GAMES,
        payload
    }
}
export const getUsers = (payload) =>{
    return{
        type: actionTypes.GET_USERS,
        payload
    }
}
export const setUsers = (payload) =>{
    return {
        type : actionTypes.SET_USERS,
        payload
    }
}