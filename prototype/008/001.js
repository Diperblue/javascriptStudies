class Exemplo {
    constructor() {
      this._propriedade = null;
    }
  
    get propriedade() {
      console.log('Getter executado');
      return this._propriedade;
    }
  
    set propriedade(valor) {
      console.log('Setter executado');
      this._propriedade = valor;
    }
  }
  
  const exemplo = new Exemplo();
  exemplo.propriedade = 'valor'; // O setter será executado
  
  console.log(exemplo.propriedade); // O getter será executadoPr