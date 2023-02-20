import react, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
  }
  getNextPage(pageId) {
    this.props.updateNextPage(pageId);
  }
  getPrevPage(pageId) {
    this.props.updatePrevPage(pageId);
  }
  render() {
    let prevButtonStatus = this.props.page > 1 ? false : true;
    let nextButtonStatus =
      this.props.page === Math.round(this.props.totalResults / 10)
        ? true
        : false;
    return (
      <>
        <div className="pagination_btn">
          <button
            className="button"
            disabled={prevButtonStatus}
            onClick={() => this.getPrevPage(this.props.page - 1)}
          >
            PREV
          </button>
          <h>
            {this.props.page} of {Math.round(this.props.totalResults / 10)}{" "}
          </h>
          <button
            className="button"
            disabled={nextButtonStatus}
            onClick={() => this.getNextPage(this.props.page + 1)}
          >
            NEXT
          </button>
        </div>
      </>
    );
  }
}

export default Pagination;
