
class Bird {

    fly() {
        console.log("Flying");
    }

}

class Sparrow extends Bird {
    
}

class Penguin extends Bird {
    // Penguins can't fly, so we might override the fly method to indicate that
    fly() {
        console.log("Penguins can't fly");
        throw new Error("Penguins can't fly");
    }
}

const bird: Bird = new Sparrow();
bird.fly();

const penguin: Bird = new Penguin();
penguin.fly();



export {}; 