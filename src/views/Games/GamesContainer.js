import { connect } from "react-redux";
import Games from "./Games";
import { getGames,mergeGames, getRoles, setMergeGames} from "../../Redux/actions";

const mapStateToProps = state => {
    return {
        games: state.gamesReducer ? state.gamesReducer.fetchGames:[],
        mergeGamesResponse : state.gamesReducer ? state.gamesReducer.mergeGamesResponse : false,
        
    }
}

const mapDispatchToProps = {
    getGames,
    mergeGames,
    setMergeGames
}

const GamesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Games);

export default GamesContainer;