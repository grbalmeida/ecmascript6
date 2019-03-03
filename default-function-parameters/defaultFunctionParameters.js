function printFullName(name, lastName, middleName = '') {
    const fullName = `${name} ${middleName} ${lastName}`
    console.log(fullName.replace(/\s{2}/, ' '))
}

printFullName('João', 'da Silva', 'Aparecido')
// João Aparecido da Silva
printFullName('João', 'da Silva')
// João da Silva

function multiplyBy(value, multiplier = 2) {
    return value * multiplier
}

const value = multiplyBy(2, 2)
console.log(value) // 4

const secondValue = multiplyBy(2, undefined) // 4
console.log(secondValue)

/* 
    Para que o valor do argumento seja intencionamente interpretado 
    com um valor desconhecido e/ou que não existe, precisamos utilizar 
    o null em vez do undefined 
*/

function print(value = '') {
    console.log(value)
}

print() // ''
print(null) // null

function calculateExponentiation(x = 2, y = x) {
    console.log(Math.pow(x, y))
}

calculateExponentiation() // 4
calculateExponentiation(2) // 4
calculateExponentiation(2, 2) // 4

const v = 'Valor 1'

// Busca a variável v no escopo acima

function myFunction(x = v) {
    const v = 'Valor 2'
    console.log(x)
}

myFunction()

function doSomethingWithMyName(name, callback = personName => console.log(personName)) {
    callback(name)
}

doSomethingWithMyName('Muriel') // Muriel
doSomethingWithMyName('Muriel', name => console.log(`Seja bem-vindo ${name}`)) // Seja bem-vindo Muriel

function requiredParameter(argument) {
    throw new Error(`O paramêtro "${argument}" é obrigatório`)
}

function insertScreen(object = requiredParameter('object')) {
    // Implementação da função
}

insertScreen() // Error: O paramêtro "object" é obrigatório