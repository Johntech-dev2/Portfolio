import React from 'react';
import Home from './Component/Home/Home';
import './App.css';
import Nav from './Component/Nav/Nav';
import Icon from './Component/Nav/Icon/Icon';
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Icon />
    </div>
  );
}

export default App;
