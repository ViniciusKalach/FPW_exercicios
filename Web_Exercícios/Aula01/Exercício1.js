/*
Exercícios:
1. Escrever um programa que declare duas variáveis numéricas e realize as quatro 
operações matemáticas básicas (+, -, *, /). Depois imprimir os resultados no console.
*/

let num1 = 4
let num2 = 2

function soma(num1, num2){
    return num1 + num2
}

function subtração(num1, num2){
    return num1 - num2
}

function multiplicação(num1, num2){
    return num1 * num2
}

function divisão(num1, num2){
    return num1 / num2
}

console.log(
    "Soma: " + soma(num1, num2) + ". " + 
    "Subtração: " + subtração(num1, num2) + ". " + 
    "Multiplicação: " + multiplicação(num1, num2) + ". " + 
    "Divisão " + divisão(num1, num2) + "."
)