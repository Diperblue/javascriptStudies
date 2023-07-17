let accountGet = 0;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    return "My name's", this.name, "\nMy age's", this.age;
  }
}

class Student extends Person {
  constructor(name, age, note) {
    super(name, age);
    this.note = note;
  }
}

let stdS = new Student("john", 19, "hahaha");

let std = new Proxy(Person, {
  get: (o, propety) => {
    accountGet++;
    return o[propety];
  },
});

console.log(std.name);
console.log("DEBUG ACCESS:", accountGet);
