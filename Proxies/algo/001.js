class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Definition of proxy activities
const proxyHandler = {
  get(target, prop, receiver) {
    if (prop === "greet") {
      return function() {
        console.log(`Intercepted greet() method!`);
        return Reflect.get(target, prop, receiver).apply(this, arguments);
      };
    } else {
      return Reflect.get(target, prop, receiver);
    }
  }
};

// MAIN proxy
const proxiedPersonClass = new Proxy(Person, {
		// Proxy in construct Person with "new" Operator
		// The logic is target = Person
		// args = new Obj(args);
  construct(target, args, newTarget) {
    console.log("DEBUG target:",target);
    console.log("DEBUG args:",args);
    console.log("DEBUG newTarget:",newTarget);
		  // It can translate for ```new Person(args);```
    const instance = Reflect.construct(target, args, newTarget);
		  // ```return new Proxy([object Person], proxyApp);```
    return new Proxy(instance, proxyHandler);
  }
});

const john = new proxiedPersonClass("John", 30);
john.greet();

