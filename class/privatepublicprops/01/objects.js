const $body = document.querySelector('body');

export class Carro {
    quilometragem = 0;
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    };

    get ligarMotor() {
        return "Motor chamado";
    };

    set registrarQuilometragem(km) {
        this.quilometragem = km;
    };

    get quilometragem() {
        return this.quilometragem;
    };
};

export function criarElemento(elemento, callback, location="afterbegin") {
    const $element = document.createElement(elemento);

    callback($element);

    // inserindo elemento
    $body.insertAdjacentElement(location, $element);
    return $element; // retornando elemento
};