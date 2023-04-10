import React from 'react';
import './App.css';
import logo from './assets/images/traverseLogo.png';
import TopAppBar from './components/TopAppBar/TopAppBar';
import RentalItemView from "./components/RentalItemView/RentalItemView";
import {RentalService} from "./service";
import ShowMapButton from "./components/ShowMapButton/ShowMapButton";

function App() {
    const rentals = new RentalService().getRentals();

    return (
        <div className="app">
            <TopAppBar logo={logo}/>
            {rentals.map(r => (
                <div className="rentals-container">
                    <RentalItemView rental={r}/>
                </div>
            ))}
            <ShowMapButton></ShowMapButton>
        </div>
    );
}

export default App;
