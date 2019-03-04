var arguments = [1, 2, 3]
console.log.apply(console, arguments)
// 1, 2, 3
console.log(...arguments)
// 1, 2, 3

const motherShoppingList = ['Leite', 'Ovos', 'Papel']
const girlfriendShoppingList = ['Arroz', 'Feijão', 'Suco']
const officeShoppingList = ['Adesivo', 'Tesoura', 'Caneta']
const shoppingList = motherShoppingList.concat(girlfriendShoppingList, officeShoppingList)
console.log(shoppingList.length) // 9

const newShoppingList = [...motherShoppingList, ...girlfriendShoppingList, ...officeShoppingList]
console.log(newShoppingList.length) // 9

const selectedProduct = {
    description: 'Blusa de Lã',
    price: 'R$ 59,90'
}

const cart = [
    {description: 'Bota de Cano Médio', price: 'R$ 199,90'},
    {description: 'Saia Colorida', price: 'R$ 29,90'},
    {description: 'Vestido Longo', price: 'R$ 399,90'}
]

const cartUpdated = [...cart, selectedProduct]

console.log(cartUpdated.length) // 4

for(let product of cartUpdated) {
    console.log(product.description)
}

function sum(a, b) {
    console.log(a + b)
}

var numbers = [1, 2]
sum(...numbers) // 3

function countNumberOfNonAccentedVowels(word) {
    let numberOfVowels = 0
    const lowercase = word.toLowerCase()
    const letters = [...lowercase]
    for(let letter of letters) {
        if('aeiou'.indexOf(letter) !== -1) {
            numberOfVowels++
        }
    }
    return numberOfVowels
}

console.log(countNumberOfNonAccentedVowels('ecmascript')) // 3
console.log(countNumberOfNonAccentedVowels('javascript')) // 3
console.log(countNumberOfNonAccentedVowels('SWIFT')) // 1
console.log(countNumberOfNonAccentedVowels('jAvA')) // 2

/*
    O operador Rest coleta os itens e coloca-os em um Array
    O operador Spread torna um Array (e outros objetos iteráveis) em itens individuais
*/