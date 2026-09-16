
type FoodType = "pizza" | "burger" | "sandwich";

interface Food {
    prepare(): void;
}

class Pizza implements Food {
    prepare(): void {
        console.log("Preparing Pizza");
    }
}

class Burger implements Food {
    prepare(): void {
        console.log("Preparing Burger");
    }
}

class Sandwich implements Food {
    prepare(): void {
        console.log("Preparing Sandwich");
    }
}


function createOrder(type: FoodType): void {
    if (type === "pizza") {
        const food = new Pizza();
        food.prepare();
    }

    if (type === "burger") {
        const food = new Burger();
        food.prepare();
    }
    if (type === "sandwich") {
        const food = new Sandwich();
        food.prepare();
    }
    throw new Error("Invalid food type");
    
}

createOrder("pizza");
createOrder("burger");
createOrder("sandwich");

export {}; 