/*
6. Faça uma função que mostre o dobro do número passado. 
Caso o número seja menor ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que zero”.
*/

function mostrarDobro(num){
    if (num <= 0) {
        return "Só é aceito números positivos maiores que zero"
    } else {
        const dobro = 2 * num
        return `O dobro do número ${num} é o número ${dobro}`
    }
}

// Teste de aplicação

console.log(mostrarDobro(7)) //deverá apontar o 14 como o dobro de 7