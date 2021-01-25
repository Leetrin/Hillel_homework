class Vegetable {
    constructor(name) {
        this.name = name
    }
}

class Animal {
    constructor(legs) {
        this.legs = legs
    }

    stomach = [];

    eat(food) {
        this.stomach.push({food});
    }
}

class Rabbit extends Animal {
    constructor(legs, breed) {
        super(legs);
        this.breed = breed
    }

    jump() {
        console.log(`${this.breed} rabbit is jumping`);
    }

    eat(food) {
        if (food instanceof Vegetable) {
            this.stomach.push({food});
        }
        else {
            throw "it is not vegetable"
        }
    }
}

class Snake extends Animal {
    constructor(legs, isPoisonous) {
        super(legs);
        this.isPoisonous = isPoisonous;
    }

    crawl() {
        console.log('snake is crawling');
    }

    eat(food) {
        if (food instanceof Rabbit) {
            this.stomach.push({food});
        }
        else {
            throw "it is not a rabbit"
        }
    }
}

class Human extends Animal {
    constructor(legs, firstName, lastName) {
        super(legs);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    walk() {
        console.log(`${this.firstName} ${this.lastName} is walking`);
    }

    greet() {
        console.log(`${this.firstName} ${this.lastName} is greeting you`);
    }

    eat(food) {
        if (!(food instanceof Human)) {
            this.stomach.push({food});
        }
        else {
            throw 'human is not a food';
        }
    }
}

const potato = new Vegetable('potato');

const cat = new Animal(4);
console.log(cat.legs);
cat.eat('sausage');

const rabbit = new Rabbit(4, 'brown');
rabbit.jump();
rabbit.eat(potato);
// rabbit.eat('sausage'); // throwing error

const snake = new Snake(0, true);
snake.crawl();
snake.eat(rabbit);
// snake.eat('sausage'); // throwing error

const human = new Human(2, 'Vasya', 'Petrov');
const anotherHuman = new Human(2, 'Petya', 'Vasiliev');
human.walk();
human.greet();
// human.eat(anotherHuman); // throwing error
human.eat('sausage');

console.log(cat.stomach);
console.log(rabbit.stomach);
console.log(snake.stomach);
console.log(human.stomach);