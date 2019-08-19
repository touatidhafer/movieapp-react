import React, { Component } from "react";
import Card from "./components/card";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      review: null,
      class: "none",
      search: "",
      star: 5,
      classStar1: "far fa-star",
      classStar2: "far fa-star ",
      classStar3: "far fa-star ",
      classStar4: "far fa-star ",
      classStar5: "far fa-star ",
      movies: [
        {
          name: "Fight Club",
          review: 5,
          img:
            "http://fr.web.img4.acsta.net/c_215_290/pictures/19/04/08/14/11/0688770.jpg"
        },
        {
          name: "Vol au-dessus d'un nid de coucou",
          review: 2,
          img:
            "http://fr.web.img5.acsta.net/c_215_290/medias/nmedia/00/02/55/99/affiche.jpg"
        },
        {
          name: "Le Seigneur des anneaux : les deux tours",
          review: 5,
          img:
            "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/00/02/54/95/affiche2.jpg"
        }
      ]
    };
  }
  addName = e => {
    this.setState({
      name: e.target.value
    });
  };
  addImage = e => {
    this.setState({
      img: e.target.value
    });
  };

  search = e => {
    this.setState({
      search: e.target.value
    });
  };

  remove = () => {
    this.setState({
      class: "none"
    });
  };

  review = e => {
    this.setState({
      review: e.target.value
    });
  };

  add = () => {
    this.setState({
      movies: [
        ...this.state.movies,
        {
          name: this.state.name,
          img: this.state.img,
          review: this.state.review
        }
      ]
    });
  };

  addplus = () => {
    this.setState({
      class: "addmovie"
    });
  };

  searchStar1 = e => {
    this.setState({
      star: 1,
      classStar1: "far fa-star"
    });
  };
  searchStar2 = e => {
    this.setState({
      star: 2,
      classStar2: "far fa-star"
    });
  };
  searchStar3 = e => {
    this.setState({
      star: 3,
      classStar3: "far fa-star"
    });
  };
  searchStar4 = e => {
    this.setState({
      star: 4,
      classStar4: "far fa-star"
    });
  };
  searchStar5 = e => {
    this.setState({
      star: 5,
      classStar5: "far fa-star"
    });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="searchBar">
            <input onChange={this.search} type="text" className="search" />
            <span className="search-btn">Search</span>
          </div>
          <p className="str">
            <i className={this.state.classStar1} onClick={this.searchStar1} />
            <i className={this.state.classStar2} onClick={this.searchStar2} />
            <i className={this.state.classStar3} onClick={this.searchStar3} />
            <i className={this.state.classStar4} onClick={this.searchStar4} />
            <i className={this.state.classStar5} onClick={this.searchStar5} />
          </p>
        </header>
        <main>
          <Card
            tabMovies={this.state.movies}
            searchValue={this.state.search}
            searchStar={this.state.star}
          />
          <div onClick={this.addplus} className="card-add">
            <a href="#top">+</a>
          </div>
          <div id="top" className={this.state.class}>
            <input
              type="text"
              onChange={this.addName}
              placeholder="Movie Name"
            />
            <input
              type="text"
              onChange={this.addImage}
              placeholder="image url"
            />
            <input type="text" onChange={this.review} placeholder="rating?" />
            <span className="annuler" onClick={this.remove}>
              X
            </span>
            <span className="add-m" onClick={this.add}>
              ADD MOVIE
            </span>
          </div>
        </main>
      </div>
    );
  }
}
export default App;
