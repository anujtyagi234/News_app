import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import About from './components/About';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<News key={"general"} category={"general"}/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/sports" element={<News key={"sports"} category={"sports"}/>} />
          <Route path="/business" element={<News key={"business"} category={"business"}/>} />
        </Routes>
        </Router>
      </div>
    )
  }
}


