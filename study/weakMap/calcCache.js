function calculoCustoso(numero) {
    console.log("Realizando cálculo custoso...");
    
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    
    return resultado;
  }
  
  console.log(calculoCustoso(5)); 