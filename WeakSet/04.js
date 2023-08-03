class Person {
	constructor(name, year) {
		this.name = name
		this.year = year
	}
}

const handler = { 
	get: (o, propety) => {
		return "teste"
	}
}

const ProxyPerson = new Proxy(Person, {
	construct(target, args, newTarget) {
		const obj = Reflect.construct(target, args, newTarget);
		return new Proxy(obj, handler);
	}
});

let john = new ProxyPerson('john', 28)
console.log(john.year)