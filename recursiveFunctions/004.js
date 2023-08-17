// 2**2 = 2*2

/*function pam(num, exp){
    if(exp!=1){
        num*=pam(num, exp-1)
    } else {
        return num
    }
}*/

const pam = (num, exp) => exp!=1 ? num*=pam(num, exp-1) : num

console.log(pam(2, 100))
