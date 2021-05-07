import React from "react";
import "./BookCards.css";

function BooksCards({ title, authors, description, image, link, Button }) {
  return (
    <>
      <div className="imageDiv">
        <img src={image} alt={title} />
      </div>
      <div className="bookHeading">
        <h5 bold>
          {title} by {authors}
        </h5>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>
      <div className="buttonDiv">
        <Button />
        <br></br>
        <br></br>
        <a href={link} rel="noopener noreferrer" target="_blank">
          <button type="button">Click for more info</button>
        </a>
      </div>
      <hr></hr>
    </>
  );
}

export default BooksCards;
