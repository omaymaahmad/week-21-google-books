const axios = require("axios");

module.exports = {
    getGoogleBooks: function(req,res) {
        const {query: params} = req;

        axios.get("https://www.googleapis.com/books/v1/volumes", {
            params
        }).then(results => res.json(results.data.items))
    }
}