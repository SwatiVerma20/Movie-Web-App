import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Error from "./Error";

// I have used the Routes because Router in React JS is to supply the browser with an asynchronous URL that corresponds to the data that will show on the web page
// path="movie/:id" defined the movie details page link here
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default App;
