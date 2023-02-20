import * as MovieTypes from "../components/actionTypes";

export function SearchReducer(
  state = {
    movie_search_list: [],
  },
  action
) {
  if (action.type != undefined) {
    switch (action.type) {
      case MovieTypes.MOVIE_SEARCH_LIST:
        if (action.movie_search_list != null) {
          return {
            movie_search_list: action.movie_search_list, // assigning the return api data
          };
        } else return state;
        break;
      default: {
        return state;
      }
    }
  }
}
