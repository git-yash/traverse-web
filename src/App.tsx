import React from 'react';
import './App.css';
import logo from './assets/images/traverseLogo.png';
import {AppBar} from "@mui/material";
import TopAppBar from './components/TopAppBar/TopAppBar';

function App() {
  return (
    <div className="App">
      <TopAppBar logo={logo}/>
    </div>
  );
}

export default   App;
