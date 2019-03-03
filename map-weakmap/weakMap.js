// As chaves só podem ser objetos

var weakMap = new WeakMap()

var firstPerson = {name: 'Maria', age: 20}
var secondPerson = {name: 'Paulo', age: 24}
var thirdPerson = {name: 'Milena', age: 25}

weakMap.set(firstPerson, 'Maria')
weakMap.set(secondPerson, 'Paulo')
weakMap.set(thirdPerson, 'Milena')

console.log(weakMap.get(firstPerson)) // Maria
console.log(weakMap.get(secondPerson)) // Paulo
console.log(weakMap.get(thirdPerson)) // Milena

console.log(weakMap.has(firstPerson)) // true
console.log(weakMap.has(secondPerson)) // true
console.log(weakMap.has(thirdPerson)) // true