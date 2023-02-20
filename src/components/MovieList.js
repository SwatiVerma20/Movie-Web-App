import react, { Component } from "react";
import { NavLink } from "react-router-dom";
const imgUrl = "https://via.placeholder.com/100/100";

class MovieList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <section className="movie-page">
          <div className="grid grid-4-col">
            {this.props.movieDetails
              ? this.props.movieDetails
                  .filter((movie) => {
                    return movie.Title.toLowerCase() === ""
                      ? movie
                      : movie.Title.toLowerCase().includes(
                          this.props.searchString
                        );
                  })
                  .map((currentMovieDetails) => {
                    const { imdbID, Title, Poster, Year } = currentMovieDetails;
                    const movieName = Title.substring(0, 15);

                    return (
                      <NavLink to={`movie/${imdbID}`} key={imdbID}>
                        <div className="card">
                          <div className="card-info">
                            <h2>
                              {movieName.length > 13
                                ? `${movieName}...`
                                : movieName}
                            </h2>
                            <img
                              src={Poster === "N/A" ? imgUrl : Poster}
                              alt="#"
                            />
                            <p>
                              IMDB Id : {imdbID} <br /> Year: {Year}
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    );
                  })
              : ""}
          </div>
        </section>
      </div>
    );
  }
}

export default MovieList;
