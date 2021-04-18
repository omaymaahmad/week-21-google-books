import React from 'react'
import UserSearch from "./UserSearch";
import API from "../utils/ApiCalls"

class SearchPage extends React.Component {
  state = {
    books: [],
    q: "",
  };
  getBooksFromGoogleAPI = () => {
      console.log("searching", this.state.q)
    API.getGoogleBooksSearch(this.state.q).then(results => console.log(results))
  };
  handleUserInput = e => {
    this.setState({
        q: e.target.value
    })
  };
  saveBookFromDatabase = (bookObject) => {
    return;
  };
  handleSearch = (event) => {
      event.preventDefault();
      console.log("Button blicked")
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
        
        
      </>
    );
  }
}
export default SearchPage;
