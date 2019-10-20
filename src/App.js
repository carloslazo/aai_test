import React from 'react';
import './App.css';
import './custom-bootstrap.css';
import NavBar from './components/navbar.jsx'
import HeroImage from './components/hero-image.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroImage/>
    </div>
  );
}

export default App;
