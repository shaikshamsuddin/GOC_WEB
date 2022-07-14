import { connect } from "react-redux";
import Games from "./Games";
import { getGames } from "../../Redux/actions";

const mapStateToProps = state => {
    return {
        games: state.gamesReducer ? state.gamesReducer.games:[]
    }
}

const mapDispatchToProps = {
    getGames
}

const GamesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Games);

export default GamesContainer;