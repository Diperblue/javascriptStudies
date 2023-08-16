function verifyNB(number){
		let count1 = 0
		while(number>0){
				count1 += number & 1 ? 1 : 0
				number >>>= 1
		}
		return count1%2==0 ? "O número tem par de bits 1" : "O número tem bits 1 impares"
}

console.log(verifyNB(3))
