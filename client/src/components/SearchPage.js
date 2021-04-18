import React from "react";
import UserSearch from "./UserSearch";
import BooksCards from "./BooksCards"
import API from "../utils/ApiCalls";

class SearchPage extends React.Component {
  state = {
    books: [],
    q: "",
  };
  getBooksFromGoogleAPI = () => {
    console.log("searching", this.state.q);
    API.getGoogleBooksSearch(this.state.q).then((results) =>
      this.setState({
        books: results.data,
      })
    );
  };
  handleUserInput = (e) => {
    this.setState({
      q: e.target.value,
    });
  };
  saveBookFromDatabase = (bookId) => {
    console.log("saved clicked", bookId)
const book = this.state.books.find(book => book.id === bookId);
API.saveBook({
  googleId: book.id,
  title: book.volumeInfo.title,
  description: book.volumeInfo.description,
  image: "image placeholder",
  authors: book.volumeInfo.authors,
  link: book.volumeInfo.infoLink,
}).then(() => this.getBooksFromGoogleAPI())

   
  };
  handleSearch = (event) => {
    event.preventDefault();
    console.log("Button blicked");
    this.getBooksFromGoogleAPI();
  };
  render() {
    return (
      <>
        <h1>Search For Books</h1>
        <p>Search for books below and save whatever you want</p>

        <UserSearch
          q={this.state.q}
          handleSearch={this.handleSearch}
          handleUserInput={this.handleUserInput}
        />
        {this.state.books.length ? (
          this.state.books.map((book) => (

            <BooksCards
            key={book.id}
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
            // image={book.volumnInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
            Button={() => (
              <button
              onClick={() => {
                this.saveBookFromDatabase(book.id);
              }}
              >
                Save
              </button>
            )}
            />
            ))
        ) : (
          <p>You need to search for a book</p>
        )}
      </>
    );
  }
}
export default SearchPage;
