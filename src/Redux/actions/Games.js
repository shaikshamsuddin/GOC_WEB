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


export const deleteTeam = (payload)=>{
    return{
        type: actionTypes.DELETE_TEAM,
        payload
    }
}
export const deleteTeamRes = (payload)=>{
    return{
        type: actionTypes.DELETE_TEAM_RES,
        payload
    }
}
export const deletePlayer = (payload)=>{
    return{
        type: actionTypes.DELETE_PLAYER,
        payload
    }
}
export const deletePlayerRes = (payload)=>{
    return{
        type: actionTypes.DELETE_PLAYER_RES,
        payload
    }
}

export const mergeLeague = (payload)=>{
    return{
        type : actionTypes.MERGE_LEAGUE,
        payload
    }
}

export const mergeLeagueRes = (payload)=>{
    return{
        type : actionTypes.MERGE_LEAGUE_RES,
        payload
    }
}
export const getLeagues = (payload)=>{
    return{
        type : actionTypes.GET_LEAGUES,
        payload
    }
}

export const setLeagues = (payload)=>{
    return{
        type : actionTypes.SET_LEAGUES,
        payload
    }
}

export const addTeamsToLeague = (payload)=>{
    return{
        type: actionTypes.ADD_TEAM_TO_LEAGUE,
        payload
    }
}

export const setAddTeamsToLeague= (payload)=>{
    return{
        type: actionTypes.SET_ADD_TEAM_TO_LEAGUE,
        payload
    }
}