import React from 'react';
import './App.css';
import logo from './assets/images/traverseLogo.png';
import TopAppBar from './components/TopAppBar/TopAppBar';
import RentalItemView from "./components/RentalItemView/RentalItemView";
import {RentalService} from "./service";

function App() {
    const rentals = new RentalService().getRentals();

    return (
        <div className="App">
            <TopAppBar logo={logo}/>
            {rentals.map(r => (
                <div className="rentalsContainer">
                    <RentalItemView rental={r}/>
                </div>
            ))}
        </div>
    );
}

export default App;
