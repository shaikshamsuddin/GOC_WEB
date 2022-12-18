import { connect } from "react-redux";
import Games from "./Games";
import { getGames,mergeGames, getRoles, setMergeGames, mergeLeagueRes, getLeagues, mergeLeague} from "../../Redux/actions";

const mapStateToProps = state => {
    return {
        games: state.gamesReducer ? state.gamesReducer.fetchGames:[],
        mergeGamesResponse : state.gamesReducer ? state.gamesReducer.mergeGamesResponse : false,
        leagues: state.gamesReducer ? state.gamesReducer.fetchLeagues:[],

        
    }
}

const mapDispatchToProps = {
    getGames,
    mergeGames,
    setMergeGames,
    mergeLeagueRes,
    getLeagues,
    mergeLeague

}

const GamesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Games);

export default GamesContainer;