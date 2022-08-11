import { connect } from "react-redux";
import { getUsers, registerUser } from "../../Redux/actions";
import { getRoles,getGames} from "../../Redux/actions";

import Users from "./User";

const mapStateToProps = state => {
    return {
        UsersResponse: state.gamesReducer ? state.gamesReducer.UsersResponse: [],
        registerEditResponse : state.gamesReducer ? state.gamesReducer.registerResponse: "",
        games: state.gamesReducer ? state.gamesReducer.fetchGames:[],
        roles : state.gamesReducer ? state.gamesReducer.fetchRoles : []

    }
}

const mapDispatchToProps = {
    getUsers,
    registerUser,
    getRoles,
    getGames
}

const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

export default UsersContainer;