import React from 'react'
import './css/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbase from './components/NavBase.js'
import Footer from './components/Footer.js'
import ClothingGrid from './components/ClothingGrid.js'
import Collections from './components/Collections.js'
import './css/bootstrap.css'

// //Import the mongoose module
// var mongoose = require('mongoose');

// //Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


function App() {
  return (
    <Router>
      <Navbase />
      <Switch>
        <Route exact path="/">
          <ClothingGrid />
        </Route>
        <Route exact path="/collections">
          <Collections />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
