/*let numbers { 
  number: [1, 2], 
  calc: () => this.number[0]+this.number[1]
  display: () => this.calc() 
}*/

let numbers = {
  listNumb: [1, 2],
};

numbers.calc = numbers.listNumb[0] + numbers.listNumb[1];
numbers.display = numbers.calc; // outcontext

let numbersProxy = new Proxy(numbers, {
  get: (o, propety) => {
    // console.log("o:", o, "\n", "propety:", propety); // debug
    if (propety != "calc" && propety != "display") {
      throw new Error("Você não pode acessar essa função...");
    }
    return o[propety];
  },
});

console.log("RETURN: ", numbersProxy.calc);
