export class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    get sayHi() {
        console.log("Hello, my name's ",this.name)
    }
}