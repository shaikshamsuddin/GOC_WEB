import { connect } from "react-redux";
import Leagues from "./Leagues";
import {getLeagues, mergeLeague} from "../../Redux/actions";
import AddLeague from "./addLeagues";

const mapStateToProps = state => {
    return {
        leagues: state.gamesReducer ? state.gamesReducer.fetchLeagues:[],
        mergeLeaguesResponse : state.gamesReducer ? state.gamesReducer.mergeLeagueData : false,
 
    }
}

const mapDispatchToProps = {
    getLeagues,
    mergeLeague

}

const LeaguesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Leagues);

export default LeaguesContainer;