let readline = require('readline');

read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


read.question(": ", (as) => {
        var stores = ["London","Paris","Milan"];
        var store = (new URLSearchParams("storeId="+as)).get('storeId');
        if(store) {
            console.log('<option selected>'+store+'</option>');
        }
        for(var i=0;i<stores.length;i++) {
            if(stores[i] === store) {
                continue;
            }
            console.log('<option>'+stores[i]+'</option>');
        }
        console.log('</select>');
})