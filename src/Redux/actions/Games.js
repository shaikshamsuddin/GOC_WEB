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
export const getTeams = (payload)=>{
    return{
        type: actionTypes.GET_TEAMS,
        payload
    }
}
export const setTeams = (payload)=>{
    return{
        type: actionTypes.SET_TEAMS,
        payload
    }
}
export const mergeTeam = (payload)=>{
    return{
        type: actionTypes.MERGE_TEAM,
        payload
    }
}
export const setResponseMergeTeam = (payload)=>{
    return{
        type: actionTypes.SET_MERGE_TEAM,
        payload
    }
}

export const uploadTeamLogo = (payload)=>{
    return {
        type: actionTypes.UPLOAD_TEAM_LOGO,
        payload
    }
}

export const setUploadTeamLogo = (payload)=>{
    return{
        type : actionTypes.SET_UPLOAD_TEAM_LOGO,
        payload
    }
}

export const getUsersForCreateTeam = (payload)=>{
    return{
        type: actionTypes.GET_USERS_FOR_CREATETEAM,
        payload
    }
}
export const setUsersForCreateTeam = (payload)=>{
    return{
        type: actionTypes.SET_USERS_FOR_CREATETEAM,
        payload
    }
}
export const wildSearchPlayers = (payload)=>{
    return{
        type: actionTypes.WILD_SEARCH_PLAYERS,
        payload
    }
}
export const setWildSearchPlayers = (payload)=>{
    return{
        type: actionTypes.SET_WILD_SEARCH_PLAYERS,
        payload
    }
}
