import React, {useState} from 'react';
import './App.css';
import logo from './assets/images/traverseLogo.png';
import TopAppBar from './components/TopAppBar/TopAppBar';
import ShowMapButton from "./components/ShowMapButton/ShowMapButton";
import CustomMap from "./components/CustomMap/CustomMap";
import RentalItemsContainer from "./components/RentalItemsContainer/RentalItemsContainer";

function App() {
    const [doShowMap, setDoShowMap] = useState(false);

    return (
        <div className="app">
            <TopAppBar logo={logo}/>
            {doShowMap && (
                <CustomMap
                    accessToken='pk.eyJ1IjoieWFzaHMxOCIsImEiOiJjbDF2MHkzMm0wcnE5M2pudHA5MjBqZ3l4In0.IkIOXbAJhopXC4KvGmslLg'
                    styleID='mapbox://styles/yashs18/cl26jf795006616mv0cd67qi6'></CustomMap>
            )}

            {!doShowMap && (
                <RentalItemsContainer></RentalItemsContainer>
            )}

            <ShowMapButton setMap={() => setDoShowMap(!doShowMap)}></ShowMapButton>
        </div>
    );
}

export default App;
