const usersArray = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];
let a = new Map();

for(let i of usersArray){
    a.set(i['id'], i['name'])
};

console.log(a.keys(), "\n", a.values());