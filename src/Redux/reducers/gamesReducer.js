import { actionTypes } from '../actions/actionTypes';
const initialState = {
    games: [
        {
            id:1,
            game:"Cricket"
        },
        {
            id:2,
            game:"Football"
        },
    ],
    loading: false,
    error: null,
  };
  
   const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_GAMES:
        return { ...state , fetchGames: action.payload };
        case actionTypes.SET_MERGE_GAMES:
        return { ...state , mergeGamesResponse: action.payload };
        case actionTypes.SET_ROLES:
        return { ...state , fetchRoles: action.payload };
      case actionTypes.SET_MERGE_ROLES :
        return { ...state , mergeRoles : action.payload};
      case actionTypes.SET_USERS :
        return {...state , UsersResponse : action.payload};
      case actionTypes.SET_REGISTER_RESPONSE : 
       return {...state, registerResponse : action.payload}; 
       case actionTypes.SET_USER : 
       return {...state, loginResponse : action.payload}; 
      default:
        return state;
    }
  };
  
  export default gamesReducer;