export class Product {

    public id: string;
    public sku: string;
    public name: string;
    public description: string;
    public unitPrice: number;
    public imageUrl: string;
    public active: boolean;
    public unitsInStock: number;
    public dateCreated: Date;
    public lastUpdated: Date;

    constructor(id: string,
        sku: string,
        name: string,
        descripton: string,
        unitPrice: number,
        imageUrl: string,
        active: boolean,
        unitsInStock: number,
        dateCreated: Date,
        lastUpdated: Date) {
        this.id = id;
        this.sku = sku;
        this.name = name;
        this.description = descripton;
        this.unitPrice = unitPrice;
        this.imageUrl = imageUrl;
        this.active = active;
        this.unitsInStock = unitsInStock;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;

    }

}
