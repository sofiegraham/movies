import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input type="text" onChange={e => props.setSearchText(e.target.value)} value={props.searchText} />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;