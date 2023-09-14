import React from "react";
import "../styles/searchbar.css"; // Import your CSS file
import '@fortawesome/fontawesome-svg-core';

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="What movie do you want to watch?"
      />
      <button type="submit" className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
