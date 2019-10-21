import React from 'react';
import './App.css';
import './custom-bootstrap.css';
import NavBar from './components/navbar.jsx'
import HeroImage from './components/hero-image.jsx'
import DeploySteps from './components/deploy-steps.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroImage/>
      <DeploySteps/>
      
    </div>
  );
}

export default App;
