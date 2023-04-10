import User from "../../models/User";

export class UsersMock {
    static dummyUsers = [
        new User('2345235', 'John', 'Doe', new Date(), 'poop', true)
    ];
}