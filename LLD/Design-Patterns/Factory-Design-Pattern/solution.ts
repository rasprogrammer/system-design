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


class FoodFactory {

    static create(type: FoodType) {
        if (type === 'burger') {
            return new Burger();
        }
        if (type === 'pizza') {
            return new Pizza();
        }
        if (type === 'sandwich') {
            return new Sandwich();
        }
        throw new Error("Unknown food");
    }
}


function createOrder(type: FoodType) {
    const food = FoodFactory.create(type);
    food.prepare();
}

