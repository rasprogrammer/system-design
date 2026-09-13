
interface PaymentGateway {
    pay(amount: number): void;
}

class StripePayment implements PaymentGateway {
    pay(amount: number): void {
        console.log(`Processing Stripe payment of $${amount}`);
    }
}


class RazorpayPayment implements PaymentGateway {
    pay(amount: number): void {
        console.log(`Processing Razorpay payment of $${amount}`);
    }
}

class PaytmPayment implements PaymentGateway {
    pay(amount: number): void {
        console.log(`Processing Paytm payment of $${amount}`);
    }
}

class PaypalPayment implements PaymentGateway {
    pay(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}


class PaymentService {
    constructor(private gateway: PaymentGateway) {
        
    }

    processPayment(amount: number): void {
        this.gateway.pay(amount);
    }
}


const stripe = new StripePayment();

const paymentService = new PaymentService(stripe);
paymentService.processPayment(100);