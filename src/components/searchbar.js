import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="row">
      <div className="col-3">
        <button className="btn btn-primary">Watched</button>
        <button className="btn btn-primary">To Watch</button>
      </div>
      <div className="col">
        <div className="input-group">
          <input
          onChange={e => props.setSearchText(e.target.value)}
          value={props.searchText}
          type="text" className="form-control" placeholder="Search for..." 
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button">Search</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;