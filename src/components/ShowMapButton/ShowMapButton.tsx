import * as React from 'react';
import './ShowMapButton.css';
import {Fab} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMap} from "@fortawesome/free-solid-svg-icons";

const ShowMapButton = (props: { setMap: any }) => {
    return (
        <div className='map-button-container'>
            <Fab variant='extended' className="map-button" onClick={props.setMap}>
                <FontAwesomeIcon icon={faMap}/>
                <div style={{paddingLeft: 5, fontFamily: "Poppins"}}>Show Map</div>
            </Fab>
        </div>
    );
}

export default ShowMapButton;
