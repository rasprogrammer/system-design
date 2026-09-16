

class PaymentService {
    pay(amount: number, method: string) {
        if (method === 'credit_card') {
            console.log(`Paying ₹${amount} using Credit Card`);
        } else if (method === 'paypal') {
            console.log(`Paying ₹${amount} using PayPal`);
        }  else if (method === "upi") {
            console.log(`Paying ₹${amount} using UPI`);
        }
    }
}

const payment = new PaymentService();
payment.pay(100, 'upi');


export {};