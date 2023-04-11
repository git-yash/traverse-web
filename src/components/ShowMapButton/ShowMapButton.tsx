import * as React from 'react';
import './ShowMapButton.css';
import {Fab} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMap} from "@fortawesome/free-solid-svg-icons";
import {faList} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const ShowMapButton = (props: { setMap: any }) => {
    const [showMapText, setShowMapText] = useState("Show Map");
    const [showMapIcon, setShowMapIcon] = useState(faMap);

    function onShowMapClicked() {
        props.setMap();

        if(showMapText === "Show Map"){
            setShowMapText("Show List");
            setShowMapIcon(faList);
        }
        else {
            setShowMapText("Show Map");
            setShowMapIcon(faMap);
        }
    }

    return (
        <div className='map-button-container'>
            <Fab variant='extended' className="map-button" onClick={onShowMapClicked}>
                <FontAwesomeIcon icon={showMapIcon}/>
                <div style={{paddingLeft: 5, fontFamily: "Poppins"}}>{showMapText}</div>
            </Fab>
        </div>
    );
}

export default ShowMapButton;
