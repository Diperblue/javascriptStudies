const gameSettings = { difficulty: "easy" };
const gameSettingsProxy = new Proxy(gameSettings, {
  get: (o, property) => {
    console.log(o); // propriedade aberta com o mesmo metodo
    console.log(property); // propriedade do metodo
  },
});

console.log(gameSettingsProxy.difficulty);
