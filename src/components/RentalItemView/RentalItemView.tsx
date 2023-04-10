import * as React from 'react';
import Rental from "../../models/Rental";
import './RentalItemView.css';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const RentalItemView = (props: { rental: Rental }) => {
    return (
        <div className='rentalContainer'>
            <img src={props.rental.image} alt='RentalImage' className='rentalImage'/>
            <div className='titleRatingContainer'>
                <p className='titleText'>{props.rental.title}</p>
                <FontAwesomeIcon icon={faStar} className='star'/>
            </div>
        </div>
    );
}

export default RentalItemView;
