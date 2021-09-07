import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
