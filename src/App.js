import React from 'react'
import './css/App.css'
import Navbase from './components/NavBase.js'
import ClothingGrid from './components/ClothingGrid.js'
import Footer from './components/Footer.js'
import './css/bootstrap.css'

function App() {
  return (
    <div>
      <Navbase />
      <ClothingGrid />
      <Footer />
    </div>
  );
}

export default App;
