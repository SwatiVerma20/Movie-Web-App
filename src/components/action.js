import * as MovieAction from "./actionTypes";

export const Movie_Search_List = (movie_search_list) => {
  return {
    type: MovieAction.MOVIE_SEARCH_LIST,
    movie_search_list: movie_search_list,
  };
};
