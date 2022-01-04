import React from 'react'
import './css/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbase from './components/NavBase.js'
import Footer from './components/Footer.js'
import ClothingGrid from './components/ClothingGrid.js'
import Collections from './components/Collections.js'
import './css/bootstrap.css'

// const express = require("express");
// const mongoose = require("mongoose");
// const Routes = require("../backend/routes")

// const app = express();

// app.use(express.json());

// mongoose.connect('mongodb+srv://mnnaegel:HNeg7uPapsdVy56@cluster0.4nr9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

// app.use(Routes);

// app.listen(3000, () => {
//   console.log("Server is running at port 3000");
// });


function App({count}) {
  return (
    <Router>
      <Navbase />
      <p>{count}</p>
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
