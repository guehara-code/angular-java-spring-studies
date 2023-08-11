export class SalesPerson {
    public firstName: string;
    public lastName: string;
    public email: string;
    public salesVolume: number;

    constructor(firstName: string,
                lastName: string,
                email: string,
                salesVolume: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.salesVolume = salesVolume;

    }
}
