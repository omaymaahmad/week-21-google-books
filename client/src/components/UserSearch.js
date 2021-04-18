import React from "react";

function UserSearch ({q, handleSearch, handleUserInput}) {
    return (
        <>
        <input type="text"
        value={q}
        placeholder="Search for a book..."
        onChange={handleUserInput}
        />
        <button onClick={handleSearch}
        type="submit">Search</button>
        </>
    )
}
export default UserSearch; 

