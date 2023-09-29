/*
4. Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br
*/

const nome = "Vinicius Kalach Freitas Cato"
const nomes = nome.split(' ') 

const primeiroNome = nomes[0] 
const ultimoNome = nomes[nomes.length -1]

const email = `${primeiroNome}.${ultimoNome}@facens.br`
console.log(email)

