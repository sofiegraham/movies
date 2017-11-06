import React from 'react';
import MovieList from './movielist';
import SearchBar from './searchbar';
import AddMovie from './addmovie';
import movies from '../data/movies';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      movies: movies
    };
  }

  setSearchText = (value) => {
    this.setState({
      searchText: value
    });
  }

  addMovie = (movie) => {
    let movieObj = {title: movie};
    this.setState({
      movies: movies.concat([movieObj])
    });
  }
 
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="display-3">Movie List</h1>
        </div>
        <div className="row">
          <AddMovie addMovie={this.addMovie} />
        </div>
        <div className="row">
          <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText}/>
        </div>
        <div className="row">
          <MovieList movies={this.state.movies} searchText={this.state.searchText} />
        </div>
      </div>
    );
  }
}
export default App;