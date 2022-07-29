import { connect } from "react-redux";
import Login from "./Login";
import { loginUser } from "../../Redux/actions";

const mapStateToProps = state => {
    return {
        // games: state.gamesReducer ? state.gamesReducer.games:[]
    }
}

const mapDispatchToProps = {
    loginUser
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;