
import React, { Component } from "react";
import APIKeys from "../private/APIKeys";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {

  constructor() {
    super();
    this.state = {
      searchTerm: "dolphin",
      gifs: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = (searchTerm = this.state.searchTerm) => {
    let apiKey = APIKeys.giphySearch;
    let url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&rating=g`;
    
    fetch(url)
      .then(response => response.json())
      .then(returnedData => {
        console.log(returnedData)
        this.setState({
          searchTerm: searchTerm,
          gifs: returnedData.data.slice(0, 6) // first 6 elements
        });
      });
  }

  handleSearch = searchTerm => {
    this.getData(searchTerm);
  }

  render() {
    return (
      <div className="container">
        <GifSearch search={this.handleSearch}/>
        <GifList gifs={this.state.gifs} title={this.state.searchTerm} />
      </div>
    );
  }

}