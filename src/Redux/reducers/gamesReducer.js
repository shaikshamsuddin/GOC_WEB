import { actionTypes } from '../actions/actionTypes';
const initialState = {
  games: [
    {
      id: 1,
      game: "Cricket"
    },
    {
      id: 2,
      game: "Football"
    },
  ],
  loading: false,
  error: null,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GAMES:
      return { ...state, fetchGames: action.payload };
    case actionTypes.SET_MERGE_GAMES:
      return { ...state, mergeGamesResponse: action.payload == 1 ? true : false };
    case actionTypes.SET_ROLES:
      return { ...state, fetchRoles: action.payload };
    case actionTypes.SET_MERGE_ROLES:
      return { ...state, mergeRoles: action.payload == 1 ? true : false };
    case actionTypes.SET_USERS:
      return { ...state, UsersResponse: action.payload };
    case actionTypes.SET_REGISTER_RESPONSE:
      return { ...state, registerResponse: action.payload };
    case actionTypes.SET_USER:
      return { ...state, loginResponse: action.payload };
    case actionTypes.SET_TEAMS:
      return { ...state, fetchTeams: action.payload }
    case actionTypes.SET_MERGE_TEAM:
      return { ...state, mergeTeamResponse: action.payload == 1 ? true : false }
    case actionTypes.SET_UPLOAD_TEAM_LOGO:
      return { ...state, uploadTeamLogoResponse: action.payload }
    case actionTypes.SET_USERS_FOR_CREATETEAM:
      return { ...state, setUsersForCreateTeamResponse: action.payload }
    case actionTypes.SET_WILD_SEARCH_PLAYERS:
      return { ...state, wildSearchPlayersResponse: action.payload }
    case actionTypes.DELETE_TEAM_RES:
      return { ...state, deleteTeamResponse: action.payload == 1 ? true : false }
    case actionTypes.DELETE_PLAYER_RES:
      return { ...state, deletePlayerResponse: action.payload == 1 ? true : false }
    case actionTypes.MERGE_LEAGUE_RES:
      return { ...state, mergeLeagueData: action.payload == 1 ? true : false }
    case actionTypes.SET_LEAGUES:
      return { ...state, fetchLeagues: action.payload };
    case actionTypes.SET_ADD_TEAM_TO_LEAGUE:
      return { ...state, isTeamsAddedToLeague: action.payload == 1 ? true : false }
    default:
      return state;
  }
};

export default gamesReducer;