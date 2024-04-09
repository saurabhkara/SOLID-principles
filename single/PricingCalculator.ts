import { Product } from "./orders"

export class PricingCalculator {

    calculatePricing(products: Product[]) {
        return products.reduce((acc, item) => {
            return acc + item.price
        }, 0)
    }
}