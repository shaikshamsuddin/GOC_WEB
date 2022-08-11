import { actionTypes } from "./actionTypes";

export const mergeGames = (payload)=>{
    return {
        type: actionTypes.MERGE_GAMES,
        payload
    }
}
export const setMergeGames = (payload)=>{
    return {
        type: actionTypes.SET_MERGE_GAMES,
        payload
    }
}
