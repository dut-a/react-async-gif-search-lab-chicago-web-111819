import React, { Component } from "react";

export default class GifSearch extends Component {

  getSearchTerm = event => {
    event.preventDefault();
    let txtField = document.getElementById("gif-search");
    let searchTem = txtField.value;
    txtField.value = ""; // clear search text.
    return searchTem;
  }

  render() {
    return (
      <div className="pull-right">
        <form>
          <label htmlFor="gif-search">Enter a search term: </label>
          <input type="text" name="search" className="form-control" id="gif-search" />
          <button type="submit" id="find-gifs-btn" className="btn btn-success" onClick={ evt => this.props.search(this.getSearchTerm(evt)) }>Find Gifs</button>
        </form>
      </div>
    )
  }
}