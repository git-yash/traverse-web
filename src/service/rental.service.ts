import Rental from "../models/Rental";
import {RentalsMock} from "./__mock__/Rentals.mock";
export class RentalService {
    public getRentals(): Rental[] {
        return RentalsMock.dummyRentals;
    }
}