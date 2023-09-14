/*
Exercícios:
1. Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus
lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes. Crie uma função que recebe os
comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados.
*/

const triângulo = {
    lado1: 4,
    lado2: 5,
    lado3: 6
  };

function Classificar(triângulo){
  const { lado1, lado2, lado3 } = triângulo;

  if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    return "Não é um triângulo válido";
  }

  if (lado1 === lado2 && lado2 === lado3) {
    return "Equilátero";
  }
  
  if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return "Isósceles";
  }
  
  return "Escaleno";
}