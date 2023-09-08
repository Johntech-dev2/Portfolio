import React from 'react';
import Home from './Component/Home/Home';
import './App.css';
import Nav from './Component/Nav/Nav';
import About from './Component/About/About';
import Skill from './Component/Skill/Skill';
import Contact from './Component/Ccf/Contact';
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
