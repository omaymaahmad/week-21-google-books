import React from "react";

function BooksCards({ title, authors, description, image, link, Button }) {
  return (
    <>
      <h3>
        {title} by {authors}
      </h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <Button />
      <a href={link} rel="noopener noreferrer" target="_blank">
        <button type="button">Click for more info</button>
      </a>
    </>
  );
}

export default BooksCards;
