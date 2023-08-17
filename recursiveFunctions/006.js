function mmc(num,div=2,t=1){
    if(num%div!=0){
        mmc(num,div+1)
    } else {
        if(num/div!=1) {
            t*=div
            mmc(num/div,div,t)
        } else
            return t
    } 
}

console.log(mmc(2))
