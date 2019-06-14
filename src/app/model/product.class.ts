export class Product {
    id: number;
    code: string;
    description: string;
    price: number;

    constructor(i: number, c: string, d: string,p:number) {
        this.id = i;
        this.code = c;
        this.description = d;
        this.price = p;
    }

    about(): string {
        return "Product: id = "+this.id+
                ", code = "+this.code+
                ", description = "+this.description+
                ", price = "+this.price;
    }
}