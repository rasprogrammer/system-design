
class EmailService {
    sendEmail(email: string, message: string): void {
        console.log(`Sending email to ${email} with message: "${message}"`);
    }
}

class SmsService {
    sendSms(phoneNumber: string, message: string): void {
        console.log(`Sending SMS to ${phoneNumber} with message: "${message}"`);
    }
}

class OrderService {
    private emailService: EmailService;
    private smsService: SmsService;

    constructor(emailService: EmailService, smsService: SmsService) {
        this.emailService = emailService;
        this.smsService = smsService;
    }

    placeOrder(): void {
        console.log('Order Placed');
        this.emailService.sendEmail('customer@example.com', 'Your order has been placed.');
        this.smsService.sendSms('123-456-7890', 'Your order has been placed.');
    }

}




export {};