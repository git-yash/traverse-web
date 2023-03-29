import * as React from 'react';
import Rental from "../../models/Rental";
import Box from "@mui/material/Box";

const RentalItemView = (props: {rental: Rental}) => {
    return (
        <Box style={{}}>
            <img src={props.rental.image} alt='RentalImage'/>
        </Box>
    );
}

export default RentalItemView;
