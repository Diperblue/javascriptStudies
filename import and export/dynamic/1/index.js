const imports = prompt("O que quer importar amigo: ")

import(imports)
	.then(() => console.log("Ocorreu tudo em"))
	.catch((err) => console.log("Ocorreu um erro"))
