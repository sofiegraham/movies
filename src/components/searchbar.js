import React from 'react';

const SearchBar = (props) => {
  return (
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
  );
};

export default SearchBar;