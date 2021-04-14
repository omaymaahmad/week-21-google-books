
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage"
import SavedPage from "./components/SavedPage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
    <div>
     <Navbar />
     <Switch>
       <Route exact path="/" component={SearchPage} />
       <Route exact path="/saved" component={SavedPage} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
