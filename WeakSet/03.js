const log = new WeakSet();
class Person {
		constructor(nome, idade) {
				this.nome = nome
				this.idade = idade
				log.add(this)
		}
}
let j = new Person('j', 17);
console.log(log.has(j));
