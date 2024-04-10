
interface IPaymentProcessor {
    processPayment(amount: number): void
}


class PaymentProcessor {

    processor: IPaymentProcessor
    constructor(paymentProcessor: IPaymentProcessor) {
        this.processor = paymentProcessor
    }
    processPayment(amount: number) {
        this.processor.processPayment(amount)
    }
}

class CreditCardProcessor implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment of ${amount} using Credit card`);
    }
}

class PaypalProcessor implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment of ${amount} using Paypal`)
    }
}
const creditcard = new CreditCardProcessor();
const paypalPayment = new PaypalProcessor()
const pprocess = new PaymentProcessor(paypalPayment);
pprocess.processPayment(200)