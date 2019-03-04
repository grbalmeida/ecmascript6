function mountQuerySelect() {
    const table = arguments[0]
    const numberOfArguments = arguments.length
    let columns = ''

    if(numberOfArguments > 1) {
        for(let index = 1; index < numberOfArguments; index++) {
            columns += `${arguments[index]}, `
        }
        columns = columns.substring(0, columns.length - 2)
        // remove a última vírgula
    } else {
        columns = '*'
    }

    return `SELECT ${columns} FROM ${table}`
} // es5

console.log(mountQuerySelect('customers')) 
// SELECT * FROM customers
console.log(mountQuerySelect('cities', 'name', 'population'))
// SELECT name, population FROM cities
console.log(mountQuerySelect('customers', 'name', 'address', 'phone')) 
// SELECT name, address, phone FROM customers

function logAllArguments() {
    for(let index = 0; index < arguments.length; index++) {
        console.log(arguments[index])
    }
}

logAllArguments(1, 2, 3) // 1, 2, 3

function sum() {
    let sum = 0
    const quantity = arguments.length
    for(let index = 0; index < quantity; index++) {
        sum += arguments[index]
    }
    return sum
}

console.log(sum(1, 2)) // 3
console.log(sum(1, 2, 3)) // 6
console.log(sum(1, 2, 3, 4)) // 10

/* 
    O arguments nos concede o poder de resgatar parâmetros da função
    mesmo que eles não tenham sido declarados na assinatura do método
*/

function sumWithRestOperator(...values) {
    return values.reduce((sum, currentValue) => sum + currentValue, 0)
}

console.log(sumWithRestOperator(1, 2)) // 3
console.log(sumWithRestOperator(1, 2, 3)) // 6
console.log(sumWithRestOperator(1, 2, 3, 4)) // 10
console.log(sumWithRestOperator()) // 0

// Rest Operator = Array | Arguments = object

function sumAllAndMultiplyBy(multiplier, ...values) {
    return values.reduce((sum, currentValue) => sum + (currentValue * multiplier), 0)
}

console.log(sumAllAndMultiplyBy(2, 1, 2)) // 6
console.log(sumAllAndMultiplyBy(2, 6, 7)) // 26

function mountQuerySelectWithRestOperator(table, ...columns) {
    let columnsQuery = ''

    if(columns.length > 0) {
        columnsQuery = columns.join(', ')
    } else {
        columnsQuery = '*'
    }

    return `SELECT ${columnsQuery} FROM ${table}`
}

console.log(mountQuerySelectWithRestOperator('products'))
// SELECT * FROM products
console.log(mountQuerySelectWithRestOperator('products', 'name', 'price'))
// SELECT name, price FROM products
console.log(mountQuerySelectWithRestOperator('products', 'name', 'price', 'quantity'))
// SELECT name, price, quantity FROM products