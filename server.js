//Require in packages express, mongoose, cors
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const routes = require("./routes")
//Set up our PORT
const PORT = process.env.PORT || 3001;
//Set up express server
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors());
//Set up serving of static assets from the client
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}
//Add our routes to the server
app.use(routes);
//Connect to db using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks",
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//set up the app to listen on the PORT

app.listen(PORT, () => {
    console.log("App Listening on PORT" + PORT)
})
