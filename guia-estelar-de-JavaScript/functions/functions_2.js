// function expression
// function anonymous

// parâmetros da função
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

sum(2, 3)  // arguments - argumentos
sum(5, 5)
sum(5, 3)

let number1 = 25
let number2 = 34
sum(number1, number2)

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)