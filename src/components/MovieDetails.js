import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = (props) => {
  const { id } = useParams();
  const [movie, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&type=movie&i=${id}`
      )
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="movie-section">
      <div className="movie-card movie-details-card">
        <figure>
          {" "}
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <p className="card-text">{movie.Plot}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
