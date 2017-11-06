import React from 'react';
import MovieList from './movielist';
import SearchBar from './searchbar';
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
    console.log("called", value);
    this.setState({
      searchText: value
    });
  }
 
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <h1 className="display-3">Movie List</h1>
        <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText}/>
        <MovieList movies={this.state.movies} />
        <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </button>
      </div>
      
    );
  }
}
export default App;