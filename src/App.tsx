import React from 'react';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App container">
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>      
      <Movie></Movie>
    </div>
  );
}

export default App;
