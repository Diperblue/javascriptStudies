const userBase = {
    say: (aa) => {
        console.log(aa)
    }
}

class Person {
    constructor(name) {
        this.name = name
    }
}

Object.assign(Person.prototype, userBase)
console.dir(Person)