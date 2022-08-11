
const url = process.env.REACT_APP_DEV_MODE === "dev" ? process.env.REACT_APP_DEV_SERVER_URL:""
const actionTypeUrlMappings = {
    LOGIN_USER: url+"/api/auth/login",
    GET_GAMES : url+"/api/games/getGames",
    GET_ROLES : url+"/api/games/getRoles",
    MERGE_GAMES : url+"/api/games/mergeGame",
    MERGE_ROLES : url+"/api/games/mergeRole",
    GET_USERS : url+"/api/auth/getUsers",
    REGISTER_USER : url+"/api/auth/register"


}

export default actionTypeUrlMappings;