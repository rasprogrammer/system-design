
class User {
    constructor(public name: string, public email: string) {
        
    }
}

class UserRepository {
    save(user: User) {
        console.log(`Saving user ${user.name} to database...`);
    }
}

class EmailService {
    sendWelcomeEmail(user: User) {
        console.log(`Sending welcome email to ${user.email}...`);
    }
}

class PDFGenerator {
    generateUserPDF(user: User) {
        console.log(`Generating PDF for user ${user.name}...`);
    }
}


const user = new User("John Doe", "john@example.com");
const userRepository = new UserRepository();
const emailService = new EmailService();
const pdfGenerator = new PDFGenerator();

userRepository.save(user);
emailService.sendWelcomeEmail(user);
pdfGenerator.generateUserPDF(user);

export {};