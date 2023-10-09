import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Sports from './components/Sports';
import About from './components/About';
import Business from './components/Business';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<News />}/>
          <Route path="/about" element={<About />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/business" element={<Business />} />
        </Routes>
        </Router>
      </div>
    )
  }
}


