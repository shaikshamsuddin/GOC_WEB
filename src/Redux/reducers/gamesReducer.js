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
      case "GET_GAMES":
        return { ...state };
      default:
        return state;
    }
  };
  
  export default gamesReducer;