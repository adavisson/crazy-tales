import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
     <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
