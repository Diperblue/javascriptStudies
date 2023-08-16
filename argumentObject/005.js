(function(){
    let MNUM = arguments[0]
    for(let a=1;a<arguments.length;a++){
        if(MNUM<arguments[a]){
            MNUM = arguments[a]
        }
    }
    console.log(MNUM)
})(1, 2, 3, 150, 4, 51, 32, 87, 100)
