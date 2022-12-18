
const url = process.env.REACT_APP_DEV_MODE === "dev" ? process.env.REACT_APP_DEV_SERVER_URL : ""
const actionTypeUrlMappings = {
    LOGIN_USER: url + "/api/auth/login",
    GET_GAMES: url + "/api/games/getGames",
    GET_ROLES: url + "/api/games/getRoles",
    MERGE_GAMES: url + "/api/games/mergeGame",
    MERGE_ROLES: url + "/api/games/mergeRole",
    GET_USERS: url + "/api/auth/getUsers",
    REGISTER_USER: url + "/api/auth/register",
    GET_TEAMS: url + "/api/games/getTeams",
    MERGE_TEAM: url + "/api/games/mergeTeam",
    GET_USERS_FOR_CREATETEAM: url + "/api/games/getUserForCreateTeam",
    WILD_SEARCH_PLAYERS: url + "/api/games/wildSearchPlayers",
    DELETE_TEAM : url+"/api/games/deleteTeam",
    DELETE_PLAYER : url+"/api/games/deletePlayer",
    MERGE_LEAGUE: url+ "/api/leagues/mergeLeague",
    GET_LEAGUES : url+"/api/leagues/getLeagues"


}

export default actionTypeUrlMappings;