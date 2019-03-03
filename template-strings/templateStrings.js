const login = 'ecmascript'
const day = '13 de Setembro'
const year = 2016

const message = 'Olá, ' + login + '!\nHoje é: ' + day + ' de ' + year
console.log(message)

// Template strings simples

var name = 'Gilvan'
console.log('Bem-vindo, ' + name) // es5

const myName = 'Gilvan'
console.log(`Bem-vindo, ${myName}`) // es6

const n1 = 1, n2 = 2
console.log(`${n1} + ${n2} = ${n1 + n2}`)
// 1 + 2 = 3

console.log('exibindo\numa\npalavra\npor\nlinha') // es5

console.log(`
exibindo
uma
palavra
por
linha
`) // es6

const age = 22
const address = 'Rua do Almirante - 238'
const div = `
    <div>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Idade:</b> ${age}</p>
        <p><b>Endereço:</b> ${address}</p>
    </div>
`

console.log(div)

// Template string marcado

const hours = new Date().getHours()
const goodMorningMessage = `Bom dia, são ${hours} horas`
console.log(goodMorningMessage)

const newMessage = defineMessage`${""}${hours} horas`

function defineMessage(strings, ...values) {
    const hour = values[1]

    if(hour >= 6 && hour <= 12) {
        values[0] = 'Bom dia'
    } else if(hour > 12 && hour <= 18) {
        values[0] = 'Boa tarde'
    } else {
        values[0] = 'Boa noite'
    }

    values[0] = `${values[0]}, são`
    return `${values[0]}${strings[0]} ${hour}${strings[2]}`
}

console.log(newMessage)

console.log(defineMessage`${''}${10} horas`)
console.log(defineMessage`${''}${14} horas`)
console.log(defineMessage`${''}${21} horas`)