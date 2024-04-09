export class Product {
    id: string;
    name: string;
    price: number;

    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class Orders {
    products: Product[] = []

    addProduct(product: Product) {
        this.products.push(product)
    }

    getSingleProduct(id: string) {
        return this.products.find((item) => item.id === id)
    }

    getProducts() {
        return this.products
    }

    removeProduct(id: string) {
        this.products = this.products.filter((item) => item.id !== id)
    }

    paymentProcess() {
        console.log('Processing payment...');
        console.log('Payment processed successfully');
        console.log('Added to accounting system');
        console.log('Email sent');
    }
}