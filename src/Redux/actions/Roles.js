import { actionTypes } from "./actionTypes";

export const getRoles = (payload)=>{
    return {
        type: actionTypes.GET_ROLES,
        payload
    }
}
export const setRoles = (payload)=>{
    return {
        type: actionTypes.SET_ROLES,
        payload
    }
}
export const mergeRoles = (payload)=>{
    return {
        type: actionTypes.MERGE_ROLES,
        payload
    }
}
export const setMergeRoles = (payload)=>{
    return {
        type: actionTypes.SET_MERGE_ROLES,
        payload
    }
}
