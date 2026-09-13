class User {
    constructor(public name: string, public email: string) {
        
    }

    saveToDatabase() {
        console.log('Saving user to database...')
    }

    sendEmail() {
        console.log("Sending welcome email...");
    }

    generatePDF() {
        console.log("Generating user PDF...");
    }



}


export {};