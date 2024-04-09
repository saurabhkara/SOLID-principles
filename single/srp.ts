import { Paymemt } from './payment';
import { Invoice } from './Invoice';
import { PricingCalculator } from './PricingCalculator';
// Single Responsiblity Principal
import { Product, Orders } from "./orders";

const product1 = new Product('1', 'Laptop', 500);
const product2 = new Product('2', 'Iphone', 1000);

const order = new Orders();
order.addProduct(product1);
order.addProduct(product2);
order.paymentProcess()

const pricingCalculator = new PricingCalculator()
const total = pricingCalculator.calculatePricing(order.getProducts());
const invoice = new Invoice();
invoice.generateInvoice(order.getProducts(), total);

const payment = new Paymemt();
payment.processPayment()