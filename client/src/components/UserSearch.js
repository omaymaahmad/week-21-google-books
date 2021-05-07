import React from "react";
import "./UserSearch.css";

function UserSearch({ q, handleSearch, handleUserInput }) {
  return (
    <>
      <div className="wrap">
        <input
          type="text"
          value={q}
          placeholder="Search for a book..."
          onChange={handleUserInput}
          className="searchTerm"
        />
        <button onClick={handleSearch} type="submit" className="searchButton">
          Search
        </button>
      </div>
    </>
  );
}
export default UserSearch;
