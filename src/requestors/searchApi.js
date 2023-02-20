import axios from "axios";

// setting the api link
export const API_URL = `http://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}&type=movie&`;
export const FetchMovieSearch = (
  searchString,
  searchType,
  movieYear,
  pageNo,
  dispatch
) => {
  let serachTypeParameter =
    searchType === "movie"
      ? "s"
      : searchType === "id"
      ? "i"
      : searchType === "title"
      ? "s"
      : "s";
  axios({
    method: "GET",
    url: `${API_URL}${serachTypeParameter}=${searchString}&y=${movieYear}&page=${pageNo}`,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": null,
    },
  })
    .then((response) => {
      dispatch(response.data);
    })
    .catch((err) => console.error(err));
};
