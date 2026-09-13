

function processPayment(type: string, amount: number) {
    if (type === "paypal") {
        console.log(`Processing PayPal payment of $${amount}`);
    }

    if (type === "stripe") {
        console.log(`Processing Stripe payment of $${amount}`);
    }

    if (type === "razorpay") {
        console.log(`Processing Razorpay payment of $${amount}`);
    }

    if (type === "paytm") {
        console.log(`Processing Paytm payment of $${amount}`);
    }
}


processPayment("paypal", 100);
processPayment("stripe", 200);
processPayment("razorpay", 300);