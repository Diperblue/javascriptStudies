function countB(aql) {
	let countAB = 0
    while(aql>0){
		if (aql & 1) {
		    countAB++
		}
		console.log("DEBUG countAB:",countAB)
		aql >>>= 1

	}
    console.log("DEBUG BINARY:",aql.toString(2))
	return countAB
}

const number = process.argv[2]
const c = countB(Number(number))
console.log("Iniciando com", number)


console.log("DEBUG c(object):",c)
