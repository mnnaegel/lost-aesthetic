import React from 'react'
import './css/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbase from './components/NavBase.js'
import Footer from './components/Footer.js'
import ClothingGrid from './components/ClothingGrid.js'
import Collections from './components/Collections.js'
import './css/bootstrap.css'

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
