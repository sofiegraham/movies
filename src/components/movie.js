import React from 'react';

const Movie = (props) => {
  return (
    <div className="list-group-item">
      {props.movie.title}
    </div>
  );
};

export default Movie;