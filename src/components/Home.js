import React from "react";
import MovieSearchProvider from "../containers/MovieSearchProvider"; // I have used the provider here so we can connect with redux store and get the requried data for the component
import "./App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <MovieSearchProvider />
      </div>
    );
  }
}
export default Home;
