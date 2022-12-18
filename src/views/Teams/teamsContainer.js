import { connect } from "react-redux";
import Teams from "./teams";
import { getGames, getRoles, getTeams, mergeTeam,getUsers,uploadTeamLogo, getUsersForCreateTeam , deleteTeam , deletePlayer,wildSearchPlayers} from "../../Redux/actions";

const mapStateToProps = state => {
    return {
        games: state.gamesReducer ? state.gamesReducer.fetchGames:[],
        fetchTeams : state.gamesReducer ? state.gamesReducer.fetchTeams : [],
        Users : state.gamesReducer ? state.gamesReducer.UsersResponse : [],
        mergeTeamResponse : state.gamesReducer ? state.gamesReducer.mergeTeamResponse : [],
        UsersForCreateTeamResponse : state.gamesReducer ? state.gamesReducer.setUsersForCreateTeamResponse : [],
        uploadTeamLogoResponse : state.gamesReducer ? state.gamesReducer.uploadTeamLogoResponse : [],
        deleteTeamResponse : state.gamesReducer ? state.gamesReducer.deleteTeamResponse : '',
        deletePlayerResponse : state.gamesReducer ? state.gamesReducer.deletePlayerResponse : '',
        wildSearchPlayersResponse : state.gamesReducer ? state.gamesReducer.wildSearchPlayersResponse : '',
    }
}

const mapDispatchToProps = {
    getGames,
    getTeams,getRoles,
    mergeTeam,
    getUsers,
    uploadTeamLogo,
    getUsersForCreateTeam,
    deleteTeam,
    deletePlayer,
    wildSearchPlayers,
    getUsersForCreateTeam,

}

const TeamsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Teams);

export default TeamsContainer;