
class Singleton {

    constructor() {
        
    }
}

const sing1 = new Singleton();
const sing2 = new Singleton();

console.log(sing1 === sing2); // Should print true if Singleton is implemented correctly


export {};