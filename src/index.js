import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sponsors from './routes/Sponsors';
import About from './routes/About';
import Header from './components/Header'
import Home from './routes/Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
        <div className="App-wrapper">
          <Header />
        </div>,
document.getElementById('root'));
