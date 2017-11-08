import React from 'react';

const Movie = (props) => {
  let watchStyle = props.movie.watched ? "btn btn-primary" : "btn btn-outline-primary"
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col">
          {props.movie.title}
        </div>
        <div className="col-2">
          <button type="button" onClick={(e) => {props.alterWatched(props.movie)}} className={watchStyle}>{ props.movie.watched ? "Watched" : "Unwatched"}</button>
        </div>
      </div>
    </div>
  );
};

export default Movie;