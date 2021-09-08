import React from "react";

function Search({ searchInput, handleSearch }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"
               value={searchInput}
               onChange={e => handleSearch(e)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
