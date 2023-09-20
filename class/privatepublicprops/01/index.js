import * as t from "./objects.js";

// criando referenciador de body
const $body = document.querySelector('body');

const $button = t.criarElemento('button', ($element) => {
    $element.innerText = "Criar"
});

$button.addEventListener('click', () => {
    $button.style.display = "none"
    const $register = t.criarElemento('button', ($element) => {
        $element.innerText = "Registrar"
    })
    const $modelo = t.criarElemento('input', ($element) => {
        $element.placeholder = "Modelo do carro"
    })
    const $ano = t.criarElemento('input', ($element) => {
        $element.placeholder= "Ano do carro"
    })
    $register.addEventListener('click', () => {
        $register.style.display = "none"
        $modelo.style.display = "none"
        $ano.style.display = "none"

        if ($modelo.value === "") t.criarElemento('span', ($elemento) => {
            $elemento.innerText = "Você não adicionou valores em modelo."
        }, "beforeend")
        if ($ano.value === "") t.criarElemento('span', ($elemento) => {
            $elemento.innerText = "Você não adicionou valores no input ano."
        }, "beforeend")
        
        const carro = new t.Carro($modelo, $ano);
        const $quilometragem = t.criarElemento('input', ($elemento) => {
            $elemento.innerText = "Registrar quilometragem"
        }, "beforeend")
        t.criarElemento('button', ($elemento) => {
            $elemento.innerText = "Registrar"
        }, "beforeend").addEventListener('click', function() {
            carro.registrarQuilometragem = $quilometragem
            $quilometragem.style.display = "none"
            this.style.display = "none"
        })

        
    })
});