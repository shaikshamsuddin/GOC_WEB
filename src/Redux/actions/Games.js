import { actionTypes } from "./actionTypes";

export const getGames = (payload)=>{
    return {
        type: actionTypes.GET_GAMES,
        payload
    }
}