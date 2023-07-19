const gameSettings = { difficulty: "easy" };
const gameSettingsProxy = new Proxy(gameSettings, {
  get: (o, property) => {
    console.log("o:", o); // propriedade aberta com o mesmo metodo
    console.log("property:", property); // propriedade do metodo
    console.log(o[property]);
  },
});

console.log(gameSettingsProxy.difficulty);
