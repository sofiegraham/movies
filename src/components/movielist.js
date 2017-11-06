import React from 'react';
import Movie from './movie';


const MovieList = (props) => {
  return (
    <ul className="list-group">  
      {props.movies.map((movie, idx) => {
        return <Movie movie={movie} key={idx} />
      })}
    </ul>
  );
};

export default MovieList;