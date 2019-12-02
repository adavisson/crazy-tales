import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Templates from './components/Templates';
import About from './components/About';

function App() {
  return (
     <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/templates" component={Templates} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
