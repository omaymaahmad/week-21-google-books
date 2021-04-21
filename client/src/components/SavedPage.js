import React from 'react'
import API from "../utils/ApiCalls"
import BooksCards from "./BooksCards"

class SavedBooks extends React.Component {
state = {
    books: [],
  };
  componentDidMount() {
    console.log("Saveds mounted")
    this.getDatabaseBooks();
  }
  getDatabaseBooks = () => {
    API.getAllSavedBooks().then(res => {
      this.setState({
        books: res.data
      })
    });
  };
  deleteBookFromDatabase = (bookId) => {
    API.deleteBooks(bookId).then(() => this.getDatabaseBooks());
  };
  render() {
      return (
   <>
        <h1>Saved Page</h1>
        <p>View or Remove your Saved Books</p>
        {this.state.books.length ? (
          this.state.books.map((book) => (
            <BooksCards
            key={book._id}
            title={book.title}
            description={book.description}
            // image={book.volumnInfo.imageLinks.thumbnail}
            link={book.infoLink}
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
      )
  }
}
export default SavedBooks;

