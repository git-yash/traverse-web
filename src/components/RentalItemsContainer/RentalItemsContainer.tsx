import * as React from 'react';
import {RentalService} from "../../service";
import RentalItemView from "../RentalItemView/RentalItemView";

const RentalItemsContainer = () => {
    const rentals = new RentalService().getRentals();

    return (
        <div>
            {
                rentals.map(r => (
                    <div className="rentals-container">
                        <RentalItemView rental={r}/>
                    </div>
                ))
            }
        </div>
    );
}

export default RentalItemsContainer;