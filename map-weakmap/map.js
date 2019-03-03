var map = new Map()
function myFunction() {}
var object = {}

map.set('string', 'Sou uma string')
map.set(object, 'Sou um objeto')
map.set(myFunction, 'Sou uma função')

console.log(map.get('string')) // Sou uma string
console.log(map.get(object)) // Sou um objeto
console.log(map.get(myFunction)) // Sou uma função

console.log(`Tamanho: ${map.size}`) // 3

console.log(map.has('string')) // true
console.log(map.has('123')) // false
console.log(map.has(object)) // true
console.log(map.has('ABC')) // false
console.log(map.has(myFunction)) // true

map.delete('string')
console.log(map.has('string')) // false
map.delete(object)
console.log(map.has(object)) // false
map.delete(myFunction)
console.log(map.has(myFunction)) // false

console.log(`Tamanho: ${map.size}`) // 0

map.set('string', 'ABC')
map.set('number', 123)
map.set('array', [1, 2, 3])
map.set('object', {})
map.set('function', function() {})

console.log(`Tamanho: ${map.size}`) // 5

map.clear()

console.log(`Tamanho: ${map.size}`) // 0

map.set('one', 1)
map.set('two', 2)
map.set('three', 3)

for(var key of map.keys()) {
    console.log(key) // one two three
}

for(var value of map.values()) {
    console.log(value) // 1 2 3
}

for(var entree of map.entries()) {
    console.log(entree)
    /*
        ['one', 1]
        ['two', 2]
        ['three', 3]
    */
}