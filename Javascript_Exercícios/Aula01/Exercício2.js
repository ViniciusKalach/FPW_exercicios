/*
2. Faça um programa que mostre os números impares em um intervalo de 0 a 100.
*/

const num = []

for (var i = 1; i <= 100; i++){
    if (i % 2 !== 0) {
        num.push(i);
    }
}

console.log(num)