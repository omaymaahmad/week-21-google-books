import axios from "axios";

export default {
    //Hit the google api end point and search for the users input
    getGoogleBooksSearch: function(bookTitle){
        return axios.get("/api/googlebooks", { params: {q: "title:" + bookTitle}})
    },
    //get all of the users saved books from the database
    getAllSavedBooks: function() {
        return axios.get("/api/books")
    },
    //save a book to the db by sending an object with the model details
    saveBook: function(bookDetails){
        return axios.post("/api/books", bookDetails)
    }
}