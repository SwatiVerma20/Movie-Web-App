import SearchMovie from "../components/SearchMovie";
import { Movie_Search_List } from "../components/action";
import { connect } from "react-redux";

const mapstateToProps = (state) => {
  let movieSearchList = [];
  let isError;
  let totalResults = 0;

  if (
    state.movieSearchList.movie_search_list !== undefined &&
    state.movieSearchList.movie_search_list.Search
  ) {
    movieSearchList = state.movieSearchList.movie_search_list.Search; // checking the Search results exist or not
  } else if (state.movieSearchList.movie_search_list.length === 0) {
    movieSearchList = state.movieSearchList.movie_search_list;
  } else {
    movieSearchList.push(state.movieSearchList.movie_search_list);
  }
  // checking the api response to show error message
  isError =
    state.movieSearchList.movie_search_list.Response === "True" ? false : true;

  totalResults =
    movieSearchList && movieSearchList.length > 0
      ? state.movieSearchList.movie_search_list.totalResults
      : 0;
  return {
    movieList: movieSearchList,
    isError: isError,
    totalResults: totalResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieSearch: (movie_search_list) => {
      dispatch(Movie_Search_List(movie_search_list));
    },
  };
};

const MovieSearchProvider = connect(
  mapstateToProps,
  mapDispatchToProps
)(SearchMovie);
export default MovieSearchProvider;
