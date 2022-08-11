import { connect } from "react-redux";
import { getRoles,registerUser,getGames} from "../../Redux/actions";
import RegisterPage from "./register";
const mapStateToProps = state => {
    return {
        games: state.gamesReducer ? state.gamesReducer.fetchGames:[],
        registerEditResponse : state.gamesReducer ? state.gamesReducer.registerResponse: "",
        roles : state.gamesReducer ? state.gamesReducer.fetchRoles : []

    }
}

const mapDispatchToProps = {
    getGames,
    getRoles,
    registerUser
}

const RegisterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterPage);

export default RegisterContainer;