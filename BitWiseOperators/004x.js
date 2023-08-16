function verifyP(number){
		while(number>0){
				if(number>>>1 & 1 || number>>>1 == 1){
						if(number>>>1<0){
								return "O número não é potencia de 2"
						} else {
								return "É potencia de 2"
						}
				}
				number >>>= 1
		}
}

console.log(verifyP(3))
