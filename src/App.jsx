import React from 'react';
import Home from './Component/Home/Home';
import './App.css';
import Nav from './Component/Nav/Nav';
import About from './Component/About/About';
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
