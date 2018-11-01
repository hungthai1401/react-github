import { FETCHING, FETCH_ERROR, FETCH_SUCCESS } from "../constains";

const initState = {
  fetching: false,
  repos: [],
  error: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        fetching: true,
        repos: [],
        error: false
      };
    case FETCH_SUCCESS:
      const repos = action.repos;
      return {
        fetching: false,
        repos: repos,
        error: false
      };
    case FETCH_ERROR:
      return {
        fetching: false,
        repos: [],
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
