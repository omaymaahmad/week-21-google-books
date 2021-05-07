import React from "react";
import UserSearch from "../components/UserSearch";
import BooksCards from "../components/BooksCards";
import API from "../utils/ApiCalls";
import "../styles/SearchPage.css";

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
    console.log("saved clicked", bookId);
    const book = this.state.books.find((book) => book.id === bookId);
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      authors: book.volumeInfo.authors,
      link: book.volumeInfo.infoLink,
    }).then(() => this.getBooksFromGoogleAPI());
  };
  handleSearch = (event) => {
    event.preventDefault();
    console.log("Button blicked");
    this.getBooksFromGoogleAPI();
  };
  render() {
    return (
      <>
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
              authors={book.volumeInfo.authors.join(", ")}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.thumbnail}
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
          <div className="elseStatement">
            <p>You need to search for a book</p>
          </div>
        )}
      </>
    );
  }
}
export default SearchPage;
