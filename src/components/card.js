import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  render() {
    return (
      <div className="movies">
        {this.props.tabMovies
          .filter(el => {
            return (
              el.review <= this.props.searchStar &&
              el.name
                .toUpperCase()
                .includes(this.props.searchValue.toUpperCase())
            );
          })
          .map(el => {
            return (
              <div className="card">
                <img className="card-img" alt="img" src={el.img} />
                <p className="card-name">{el.name}</p>
                <p className="card-review">{"".padEnd(el.review, "☆")}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Card;
