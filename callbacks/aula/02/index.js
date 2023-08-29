function newButton(text, callback) {
  const $body = document.querySelector('body'); // objeto do body HTML
  const $button = document.createElement("button"); // cria o elemento
  $button.textContent = text; // conteúdo do elemento
  
  callback($button)

  $body.insertAdjacentElement("beforeend", $button); // adicionando elemento butão no body
}

const $login = newButton('Login', (q) => {
  q.addEventListener('click', () => {
    console.log('O botão de login foi clicado.')
  })
});