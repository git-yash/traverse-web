import Rental from "./Rental";

export default class User {
    id: string = '';
    firstName: string = '';
    lastName: string = '';
    dateJoined: Date | undefined;
    itemsUpForRent: any; // TODO: fix this to type [Rental]
    isVerified: boolean = false;

    constructor(id: string, firstName: string, lastName: string, dateJoined: Date, itemsUpForRent: any, isVerified: boolean) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateJoined = dateJoined;
        this.itemsUpForRent = itemsUpForRent;
        this.isVerified = isVerified;
    }

}