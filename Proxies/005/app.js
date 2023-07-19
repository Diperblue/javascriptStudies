let estudante = {
  name: "john",
};

let tproxy = new Proxy(estudante, {
  deleteProperty: (o, property) => {
    if (property == "name") {
      throw new Error("Você não pode deletar name");
    }
  },
});

delete tproxy.name;
