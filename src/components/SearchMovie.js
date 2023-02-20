import React from "react";
import { FetchMovieSearch } from "../requestors/searchApi";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      defaultSearchString: "Home",
      selection: "s",
      dataNotExist: true,
      movieYear: "",
      sort: "asc",
      sortBy: "",
      page: 1,
    };
  }

  componentDidMount() {
    if (this.state.dataNotExist) {
      FetchMovieSearch(
        this.state.defaultSearchString,
        this.state.selection,
        this.state.movieYear,
        this.state.page,
        this.props.getMovieSearch
      );
      this.setState({ dataNotExist: false });
    }
  }

  //Pagination for Next page
  updateNextPage = (pageNo) => {
    this.setState({ page: pageNo });
    console.log(this.state.page, "Next Page");
    FetchMovieSearch(
      this.state.defaultSearchString,
      this.state.selection,
      this.state.movieYear,
      pageNo,
      this.props.getMovieSearch
    );
  };

  //Pagination for previous page
  updatePrevPage = (pageNo) => {
    this.setState({ page: pageNo });
    console.log(this.state.page, "Prev Page");
    FetchMovieSearch(
      this.state.defaultSearchString,
      this.state.selection,
      this.state.movieYear,
      pageNo,
      this.props.getMovieSearch
    );
  };

  //Search on press enter in search box
  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.setState({ searchString: e.target.value }, () => {
        console.log(this.state.searchString, "Search String");
      });

      // Call API for keyword search
      var searchStringVal =
        this.state.searchString !== ""
          ? this.state.searchString
          : e.target.value;
      FetchMovieSearch(
        searchStringVal,
        this.state.selection,
        this.state.movieYear,
        this.state.page,
        this.props.getMovieSearch
      );
      this.setState({ defaultSearchString: searchStringVal });
    }
  };

  //Category dropdown selection
  handleOnCategoryChange(e) {
    this.setState({ selection: e.target.value });
  }

  //Search button click
  handleOnSearchButton(value) {
    FetchMovieSearch(
      this.state.searchString,
      this.state.selection,
      this.state.movieYear,
      this.state.page,
      this.props.getMovieSearch
    );
    this.setState({ defaultSearchString: this.state.searchString });
    this.setState({ searchString: "" }, () => {
      console.log(this.state.searchString, "Search String");
    });
    this.setState({ movieYear: "" });
  }

  //SortBy handle
  setSort(e) {
    var sortBy = e.target.value;
    this.setState({ sortBy: sortBy });
  }

  render() {
    let searchResult = [...this.props.movieList];
    const sortedList = searchResult.sort((a, b) => {
      if (this.state.sortBy !== "") {
        const isReversed = this.state.sort === "asc" ? 1 : -1;
        return this.state.sortBy === "title"
          ? isReversed * a.Title.localeCompare(b.Title)
          : isReversed * a.Year.localeCompare(b.Year);
      } else {
        return searchResult;
      }
    });

    return (
      <div>
        <div>
          <section className="search-section">
            <h2>Search IMDb Movie</h2>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="search-options">
                <div className="search-bar">
                  <div id="select">
                    <p>All categories</p>
                    <select
                      value={this.state.selection}
                      onChange={(e) => this.handleOnCategoryChange(e)}
                    >
                      <option selected="selected" hidden>
                        category
                      </option>
                      <option value="title">By Title </option>
                      <option value="id">By Id </option>
                    </select>
                  </div>
                  <input
                    type="text"
                    name="search"
                    value={this.state.searchString}
                    onKeyDown={(e) => this.handleKeyDown(e)}
                    placeholder="search movie by category"
                    onChange={(e) =>
                      this.setState({ searchString: e.target.value })
                    }
                  />
                </div>
                <div className="yearDiv">
                  <input
                    className="year"
                    name="movieYear"
                    type="text"
                    value={this.state.movieYear}
                    placeholder="year"
                    onChange={(e) =>
                      this.setState({ movieYear: e.target.value })
                    }
                  />
                </div>
                <div className="searchButton">
                  <button
                    className="button"
                    onClick={(e) => this.handleOnSearchButton(e)}
                  >
                    Search
                  </button>
                  <select
                    className="selected"
                    value={this.state.selection}
                    onChange={(e) => this.setSort(e)}
                  >
                    <option selected="selected" hidden>
                      Sort by
                    </option>
                    <option value="title">Title </option>
                    <option value="year">Year </option>
                  </select>
                </div>
              </div>
              <div className="card-error">
                {this.props.isError && <p> No Results Found!</p>}
              </div>
            </form>
          </section>
        </div>
        {sortedList.length > 1 && (
          <Pagination
            updateNextPage={this.updateNextPage}
            updatePrevPage={this.updatePrevPage}
            page={this.state.page}
            totalResults={this.props.totalResults}
          />
        )}
        {this.props.isError === false && (
          <MovieList
            movieDetails={sortedList}
            searchString={this.state.searchString}
          />
        )}
      </div>
    );
  }
}
export default SearchMovie;
