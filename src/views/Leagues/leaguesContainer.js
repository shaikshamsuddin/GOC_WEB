import { connect } from "react-redux";
import Leagues from "./Leagues";
import {getLeagues, mergeLeague, addTeamsToLeague,getTeams, getTeamsFromLeague} from "../../Redux/actions";
import AddLeague from "./addLeagues";

const mapStateToProps = state => {
    return {
        leagues: state.gamesReducer ? state.gamesReducer.fetchLeagues:[],
        mergeLeaguesResponse : state.gamesReducer ? state.gamesReducer.mergeLeagueData : false,
        addTeamsToleagueResponse : state.gamesReducer ? state.gamesReducer.isTeamsAddedToLeague : false,
        fetchTeams : state.gamesReducer ? state.gamesReducer.fetchTeams : [],
        teamsInLeague : state.gamesReducer ? state.gamesReducer.teamsInLeague : []

 
    }
}

const mapDispatchToProps = {
    getLeagues,
    mergeLeague,
    addTeamsToLeague,
    getTeams,
    getTeamsFromLeague
    }

const LeaguesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Leagues);

export default LeaguesContainer;