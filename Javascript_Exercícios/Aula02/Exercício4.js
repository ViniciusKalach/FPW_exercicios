/*
4. Crie uma função que verifica se um número inteiro passado como parâmetro é
divisível por 3 e retorne true ou false
*/

function DivisivelPor3(numero) {
    if (numero % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Teste de aplicação

  console.log(DivisivelPor3(12)); // Deverá retornar true 
  console.log(DivisivelPor3(13)); // Deverá retornar false 
  