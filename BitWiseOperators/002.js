let count1 = 0
let count2 = 0
let countL1 = 0
let countL2 = 0
let arg1 = process.argv[2]
let arg2 = process.argv[3]
let help = "Forma de se utilizar:\n\tnode app.js numero1 numero2"

if (arg1 == undefined | arg2 == undefined) {
		throw new Error(`Argumentos faltando...\n${help}\n\nNode...Node..`)
}

function maxN(o, t){
		let ot = o
		let tt = t
		while(o>0){
				countL1 += o | 1 ? 1 : 1
				count1 += o & 1 ? 1 : -1
				console.log("count1:",count1)
				o >>>= 1
		}
		while(t>0){
				countL2 += t | 1 ? 1 : 1
				count2 += t & 1 ? 1 : -1
				console.log("count2:",count2)
				t >>>= 1
		}
		if(countL1 == countL2) {
				return count1>count2 ? ot : tt
		} else {
				return countL1>countL2 ? ot : tt
		}
}

console.log(maxN(arg1, arg2))
