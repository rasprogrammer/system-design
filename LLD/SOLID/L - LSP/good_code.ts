
class Bird { 
    eat() {

    }
}

class Sparrow extends Bird {
    fly() {
        console.log("Flying");
    }
}

class Penguin extends Bird {
    swim() {
        console.log("Swimming");
    }
}


const sparrow = new Sparrow();
sparrow.eat();
sparrow.fly();

const penguin = new Penguin();
penguin.eat();
penguin.swim();

export {};

