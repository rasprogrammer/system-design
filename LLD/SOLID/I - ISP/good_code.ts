
interface Workable {
    work(): void
}

interface Eatable {
    eat(): void
}

interface Sleepable {
    sleep(): void
}

class Robot implements Workable {
    work(): void {
        console.log("Working");
    }
}

class Human implements Workable, Eatable, Sleepable {
    work(): void {
        console.log("Working");
    }

    eat(): void {
        console.log("Eating");
    }

    sleep(): void {
        console.log("Sleeping");
    }
}

export {};