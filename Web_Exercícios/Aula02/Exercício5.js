/*
5. Escreva uma função que recebe um vetor de números inteiros e mostre como
resultado qual é o menor e qual é o maior número.
*/

function MaiorOuMenor(vetor) {

    if (vetor.length === 0) {
      return "O vetor está vazio";
    }
  
    let menor = vetor[0];
    let maior = vetor[0];
  
    for (let i = 1; i < vetor.length; i++) {
      if (vetor[i] < menor) {
        menor = vetor[i];
      }
      if (vetor[i] > maior) {
        maior = vetor[i];
      }
    }
  
    return `O menor número é: ${menor}, enquanto que o maior número é: ${maior}`;
  }
  

  
  // Teste de aplicação

  const numeros = [5, 17, 7, 3, 10, 1];
  console.log(MaiorOuMenor(numeros)); 