/*
10. Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).
*/

function contarVogais(frase) {
    const fraseMinuscula = frase.toLowerCase();
  
    let contadorVogais = 0;
  
    for (let i = 0; i < fraseMinuscula.length; i++) {
      const caractere = fraseMinuscula[i];
      
      if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
        contadorVogais++;
      }
    }
  
    return contadorVogais;
  }
  
  // Teste de aplicação

  const fraseTeste = "Hello, world!";
  const numeroDeVogais = contarVogais(fraseTeste);
  console.log(`Número de vogais: ${numeroDeVogais}`);