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
    let movieObj = {title: movie, watched: false};
    this.setState({
      movies: movies.concat([movieObj])
    });
  }

  alterWatched = (movieObj) => {
    let updatedMovies = this.state.movies.map((movie) => {
      if (movieObj.id === movie.id) {
        movie.watched = !movie.watched;
      }
      return movie;
    })
    this.setState({
      movies: updatedMovies
    })
  }
 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-3">Movie List</h1>
          </div>
        </div>
        <div className="row">
          <AddMovie addMovie={this.addMovie} />
        </div>
          <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText}/>
          <MovieList movies={this.state.movies} searchText={this.state.searchText} alterWatched={this.alterWatched}/>
      </div>
    );
  }
}
export default App;