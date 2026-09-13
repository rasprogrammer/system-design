interface Worker {
    work(): void
    eat(): void
    sleep(): void
}

class Robot implements Worker {
    work(): void {
        console.log("Working");
    }

    eat(): void {
        throw new Error("Robots don't eat");
    }

    sleep(): void {
        throw new Error("Robots don't sleep");
    }
}


export {};