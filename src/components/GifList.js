import React, { Component } from "react";

export default class GifList extends Component {

  ucFirst = txt => {
    return `${txt.charAt(0).toUpperCase()}${txt.slice(1)}`;
  }
  render() {
    console.log("list state", this.state);
    let dataTitle = <p>Currently showing data for: <strong><em>{this.ucFirst(this.props.title)}</em></strong></p>;
    let noDataTitle = <p><span style={{color: "red"}}>No data found</span> for: <strong><em>{this.ucFirst(this.props.title)}</em></strong></p>;
    return (
      <div>
        { this.props.gifs.length > 0 ? dataTitle : noDataTitle }
        <ul className="list-group">
          {this.props.gifs.map((gif, counter) => {
            return (
              <li className="list-group-item pull-left" key={counter}>
                <img className="thumbnail img-responsive" style={{width: "330px", height: "330px"}}src={gif.images.original.url} alt={gif.title} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}