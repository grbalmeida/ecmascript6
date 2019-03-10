let numbers = [0, 1, 2, 3, 5, 6, 7, 8, 9]

function hasNumber(numbers, number) {
    for(let index = 0; index < numbers.length; index++) {
        if(numbers[index] === number) {
            return true
        }
    }

    return false
}

console.log(hasNumber(numbers, 2)) // true
console.log(hasNumber(numbers, 9)) // true
console.log(hasNumber(numbers, 10)) // false

function hasNumberEs6(numbers, number) {
    for(let currentNumber of numbers) {
        if(currentNumber === number) {
            return true
        }
    }

    return false
}

console.log(hasNumberEs6(numbers, 0)) // true
console.log(hasNumberEs6(numbers, 4)) // false
console.log(hasNumberEs6(numbers, 6)) // true

function hasNumberIndexOf(numbers, number) {
    return numbers.indexOf(number) !== -1
}

console.log(hasNumberIndexOf(numbers, 1)) // true
console.log(hasNumberIndexOf(numbers, 8)) // true
console.log(hasNumberIndexOf(numbers, 11)) // false

numbers = [NaN]

console.log(numbers.indexOf(NaN) !== -1) // false

const course = 'Entendendo o ES6'
console.log(course.includes('ES6')) // true

numbers = [10, 30, 50, 70, 90, NaN]

console.log(numbers.includes(10)) // true
console.log(numbers.includes(NaN)) // true
console.log(numbers.includes(20)) // false