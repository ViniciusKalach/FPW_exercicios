/*
9. Escreva uma função que receba uma string como argumento e retorne a string invertida.
*/

function inverter(frase) {
    const letras = frase.split('');
    const letrasInvertidas = letras.reverse();
    const fraseInvertida = letrasInvertidas.join('');
    return fraseInvertida;
  }

  // Teste de aplicação
  
const frase = "Socorram-me, subi num onibus em Marrocos"
console.log(frase) // Deverá imprimir a frase original
console.log(inverter(frase)) // Deverá imprimir a frase inversa