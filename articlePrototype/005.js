class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Object.setPrototypeOf(this, Animal.prototype);
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

let myDog = new Dog("Max", "Labrador");
myDog.eat(); // Output: Max is eating.
myDog.bark(); // Output: Max is barking.
