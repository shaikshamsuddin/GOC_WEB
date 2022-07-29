
const url = process.env.REACT_APP_DEV_MODE === "dev" ? process.env.REACT_APP_DEV_SERVER_URL:""
const actionTypeUrlMappings = {
    LOGIN_USER: url+"/api/auth/login",
}

export default actionTypeUrlMappings;