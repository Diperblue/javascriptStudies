class Person { // object for the use model
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    greet() { console.log("EAE"); }
}

const handler = { // handler for proxy
    get: (objO, propety) => {
        // return objO[propety];
        return "teste";
    }
}

const PersonProxy = new Proxy(Person, { // Proxy model create
    construct(target, args, newTarget) {
        const obj = Reflect.construct(target, args, newTarget); // new Target()
        return new Proxy(obj, handler); // Proxy->target
    }
});

let john = new PersonProxy('John', 27);
console.log(john.name); // Output: John
