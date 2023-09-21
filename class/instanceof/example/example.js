class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Police extends Person {
    constructor(name, age){
        super(name, age)
    }
}

console.log(new Police instanceof Person) // True