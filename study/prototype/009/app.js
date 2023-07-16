Object.prototype.deepClone = function() {
	return this
};

const objetoOriginal = {
  nome: 'Alice',
  idade: 30,
  endereco: {
    rua: 'Rua das Flores',
    cidade: 'Cidade A',
  },
};

const objetoClonado = objetoOriginal.deepClone();

console.log(objetoClonado.nome)
