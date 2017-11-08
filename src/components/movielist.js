import React from 'react';
import Movie from './movie';


const MovieList = (props) => {
  let filteredMovies;
  let renderedList;

  if (props.searchText.length > 0) {
    filteredMovies = props.movies.filter(movie => {
      return movie.title.toUpperCase().includes(props.searchText.toUpperCase());
    })
  } else {
    filteredMovies = props.movies
  }

  if(filteredMovies.length < 1) {
    renderedList = (
      <div className="list-group-item">
        No movies found
      </div>
    )
  } else {
    renderedList = filteredMovies.map((movie, idx) => {
      return <Movie movie={movie} key={movie.id} alterWatched={props.alterWatched}/>
    });
  }

  return (
    <div className="row">
      <div className="col">
        {renderedList}
      </div>
    </div>
  );

};

export default MovieList;