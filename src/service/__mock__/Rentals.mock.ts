import Rental from "../../models/Rental";
import person from '../../assets/images/person.png';
import {UsersMock} from "./Users.mock";

export class RentalsMock {
    static dummyRentals = [
        new Rental('12234', person, 'Lawnmower', UsersMock.dummyUsers[0], '233 Tesla street', 15, 2.4),
        new Rental('12234', person, 'Lawnmower', UsersMock.dummyUsers[0], '233 Tesla street', 15, 2.4),
        new Rental('12234', person, 'Lawnmower', UsersMock.dummyUsers[0], '233 Tesla street', 15, 2.4),
        new Rental('12234', person, 'Lawnmower', UsersMock.dummyUsers[0], '233 Tesla street', 15, 2.4),
        new Rental('12234', person, 'Lawnmower', UsersMock.dummyUsers[0], '233 Tesla street', 15, 2.4),
        new Rental('12234', person, 'Lawnmower', UsersMock.dummyUsers[0], '233 Tesla street', 15, 2.4),
    ];
}