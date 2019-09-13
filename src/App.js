import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';
import {HashRouter, Link} from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <HashRouter>
        <div className="App">
          <Header/>
          <Link to = '/'></Link>
        {routes} 
        </div>
    </HashRouter>
  );
}

export default App;
