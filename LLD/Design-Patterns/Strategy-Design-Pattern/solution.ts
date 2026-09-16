
interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying ₹${amount} using Credit Card`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying ₹${amount} using PayPal`);
    }
}

class UPIPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying ₹${amount} using UPI`);
    }
}

class PaymentService {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    pay(amount: number): void {
        this.strategy.pay(amount);
    }
}

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();
const upiPayment = new UPIPayment();

const paymentService1 = new PaymentService(creditCardPayment);
paymentService1.pay(100);

const paymentService2 = new PaymentService(payPalPayment);
paymentService2.pay(200);

const paymentService3 = new PaymentService(upiPayment);
paymentService3.pay(300);


export {};