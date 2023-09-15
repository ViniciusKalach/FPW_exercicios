/*
3. Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros
e tempo de aplicação. A primeira função retornará o montante da aplicação
financeira sob o regime de juros simples e a segunda retornará o valor da
aplicação sob o regime de juros compostos.
*/

// JUROS SIMPLES

function calcularMontanteJurosSimples(capitalInicial, taxaDeJuros, tempo) {
  const montante = capitalInicial + (capitalInicial * taxaDeJuros * tempo);
  return montante;
}

// Teste de aplicação
const capital1 = 1000;
const taxa1 = 0.05; //5%
const tempo1 = 3;

const montanteSimples = calcularMontanteJurosSimples(capital1 taxa1, tempo1);
console.log(`Montante (Juros Simples): R$${montanteSimples}`);

// JUROS COMPOSTOS

function calcularMontanteJurosCompostos(capitalInicial, taxaDeJuros, tempo) {
  const montante = capitalInicial * Math.pow(1 + taxaDeJuros, tempo);
  return montante;
}

// Teste de aplicação
const capital2 = 1000;
const taxa2 = 0.05; //5%
const tempo2 = 3;

const montanteComposto = calcularMontanteJurosCompostos(capital2, taxa2, tempo2);
console.log(`Montante (Juros Compostos): R$${montanteComposto.toFixed(2)}`);
