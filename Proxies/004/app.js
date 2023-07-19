let dic = {
  a: 1,
  b: 2,
  c: 3,
};

let dicProxy = new Proxy(dic, {
  get: (o, propety) => {
    if (propety == "total") {
      let total = dic.a + dic.b + dic.c;
      return total;
    }
  },
});

console.log(dicProxy.total);
