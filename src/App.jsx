import React from 'react';
import Home from './Component/Home/Home';
import './App.css';
import Nav from './Component/Nav/Nav';
import About from './Component/About/About';
import Skill from './Component/Skill/Skill';
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skill />
    </div>
  );
}

export default App;
