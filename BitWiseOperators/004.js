function verifyPoten2(number){
		console.log(number.toString(2).length-1>>>number & 0)
		let arrayBin = []
		while(number>0){
				if((number.toString(2).length-1)>>>number & 0){
						console.log("Old binary:",number.toString(2))
						console.log("New binary:",(1>>>number).toString(2))
						if((1 >>> number)<=0){
								return "Potencia de 2"
						}
				} else {
						return "Não é potencia de 2"
				}
				number >>>= 1
		}
}
console.log(verifyPoten2(4))
