let pessoa = {
  nome: "Meuamigo",
  configurations: {
    difficulty: "easy",
  },
};

let pessoaMiddleware = new Proxy(pessoa["configurations"], {
  set: (o, propety, value) => {
    if (typeof value != "string") {
      console.log(typeof value != "string");
      throw new Error("It's not a string...");
    }
    propety[o] = value;
  },
});

pessoaMiddleware["difficulty"] = 2;
