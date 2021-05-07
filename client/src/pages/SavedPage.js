import React from "react";
import API from "../utils/ApiCalls";
import BooksCards from "../components/BooksCards";
import "../styles/SavedPage.css";

class SavedBooks extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    console.log("Saveds mounted");
    this.getDatabaseBooks();
  }
  getDatabaseBooks = () => {
    API.getAllSavedBooks().then((res) => {
      this.setState({
        books: res.data,
      });
    });
  };
  deleteBookFromDatabase = (bookId) => {
    API.deleteBooks(bookId).then(() => this.getDatabaseBooks());
  };
  render() {
    return (
      <>
        <div className="savedHeader">
          <h4>View or Remove your Saved Books</h4>
        </div>

        {this.state.books.length ? (
          this.state.books.map((book) => (
            <BooksCards
              key={book._id}
              title={book.title}
              authors={book.authors.join(", ")}
              description={book.description}
              image={book.image}
              link={book.link}
              Button={() => (
                <button
                  onClick={() => {
                    this.deleteBookFromDatabase(book._id);
                  }}
                >
                  Delete
                </button>
              )}
            />
          ))
        ) : (
          <p>You have no books saved</p>
        )}
      </>
    );
  }
}
export default SavedBooks;
