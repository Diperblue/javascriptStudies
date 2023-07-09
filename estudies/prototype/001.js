let arr = [ "teste", "teste01", "teste02" ]

arr.pop = function(a){
    console.log(arr[a])
}

arr.pop(0)