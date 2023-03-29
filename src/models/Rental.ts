import User from "./User";

export default class Rental {
    id: string = '';
    image: string = '';
    title: string = '';
    user: User | undefined;
    rentalAddress: string = '';
    pricePerDay: number = 0;

    constructor(id: string, image: string, title: string, user: User, rentalAddress: string, pricePerDay: number) {
        this.id = id;
        this.image = image;
        this.user = user;
        this.rentalAddress = rentalAddress;
        this.pricePerDay = pricePerDay;
    }
}