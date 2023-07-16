const productsDict = {
    'p1': { name: 'Product 1', price: 10 },
    'p2': { name: 'Product 2', price: 20 },
    'p3': { name: 'Product 3', price: 30 }
  };

let map = new Map();
// console.log(Object.entries(productsDict))
/*
[
  [ 'p1', { name: 'Product 1', price: 10 } ],
  [ 'p2', { name: 'Product 2', price: 20 } ],
  [ 'p3', { name: 'Product 3', price: 30 } ]
]
*/ 
for(let a of Object.entries(productsDict)){
    map.set(a[1]['name'], a[1]['price'])
};

console.log(map.keys(), "\n", map.values())