import { connect } from "react-redux";
import Login from "./Login";
import { loginUser, getGames } from "../../Redux/actions";
import { getRoles,registerUser } from "../../Redux/actions";

const mapStateToProps = state => {
    return {
        games: state.gamesReducer ? state.gamesReducer.games:[],
        registerEditResponse : state.gamesReducer ? state.gamesReducer.registerResponse: "",
        loginResponse : state.gamesReducer ? state.gamesReducer.loginResponse : ''

    }
}

const mapDispatchToProps = {
    loginUser,
    getGames,
    registerUser
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;