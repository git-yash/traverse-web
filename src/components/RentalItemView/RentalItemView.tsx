import * as React from 'react';
import Rental from "../../models/Rental";
import './RentalItemView.css';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const RentalItemView = (props: { rental: Rental }) => {
    return (
        <div className='rental-container' onClick={() => {console.log("view clicked");}}>
            <img src={props.rental.image} alt='RentalImage' className='rental-image'/>
            <div className='title-rating-container'>
                <div className='title-text'>{props.rental.title}</div>
                <div>
                    <FontAwesomeIcon icon={faStar} className='star'/>
                    <div className='rating-number'>{props.rental.rating}</div>
                </div>
            </div>
            <div className='name-verified-container'>
                <div className='name-address-text'>{props.rental.user?.firstName} {props.rental.user?.getFirstLetterOfLastName()}</div>
                {props.rental.user.isVerified && (<FontAwesomeIcon icon={faCheck} className='check'/>)}
            </div>
            <div className='name-address-text'>{props.rental.rentalAddress}</div>
            <div style={{display: "flex"}}>
                <div className='price-text'>${props.rental.pricePerDay}</div>
                <div className='per-day-text'>per day</div>
            </div>
        </div>
    );
}

export default RentalItemView;
