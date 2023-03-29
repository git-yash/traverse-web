import React from 'react';
import './App.css';
import logo from './assets/images/traverseLogo.png';
import {AppBar} from "@mui/material";
import TopAppBar from './components/TopAppBar/TopAppBar';
import RentalItemView from "./components/RentalItemView/RentalItemView";
import Rental from "./models/Rental";
import User from "./models/User";

function App() {
    let date: Date = new Date("2019-01-16");
    let exampleUser = new User('2345235', 'John', 'Doe', date, 'poop', true);
    let exampleRental = new Rental('12234', logo, 'The ROck', exampleUser, '1112 Stillwell Rdg', 15);

  return (
    <div className="App">
        <div>
            <TopAppBar logo={logo}/>
        </div>
        <div>
            <RentalItemView rental={exampleRental} />
        </div>
    </div>
  );
}

export default   App;
