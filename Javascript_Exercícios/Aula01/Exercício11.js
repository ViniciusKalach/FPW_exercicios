/*
11. Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido ou false caso contrário. 
Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'.
*/

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Testa o e-mail com a expressão regular
    return regex.test(email);
  }
  
  // Teste de aplicação
  
  console.log(validarEmail("211559@facens.com")); // Deverá retornar true
  console.log(validarEmail("211559.com")); // Deverá retornar false
  console.log(validarEmail("211559@invalido")); // Deverá retornar false