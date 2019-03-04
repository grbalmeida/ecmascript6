const User = {
    name: 'Elliot',
    lastName: 'Alderson',
    password: 'mrrobot',
    email: 'elliot.alderson@gmail.com',
    profession: 'Engenheiro de Cibersegurança',
    github: 'https://github.com/ElliotAlderson'
}

const {email} = User
console.log(email) // elliot.alderson@gmail.com

const {password} = User
console.log(password) // mrrobot

const Person = {
    lastName: 'Alberto'
}

const {lastName:nickname} = Person
//console.log(lastName) - lastName is not defined
console.log(nickname) // Alberto

const juice = {
    flavor: 'Uva',
    quantity: '500ml'
}

function describesJuice({flavor, quantity}) {
    return `Este suco é de sabor ${flavor} e possui ${quantity}`
}

console.log(describesJuice(juice)) // Este suco é de sabor Uva e possui 500ml

const candy = {
    type: 'Açucar'
}

function describesJuiceWithTwoObjects({flavor, quantity}, {type}) {
    return `Este suco é de sabor ${flavor} e possui ${quantity} adocicado com ${type}`
}

console.log(describesJuiceWithTwoObjects(juice, candy))
// Este suco é de sabor Uva e possui 500ml adocicado com Açucar

function retrievesDataFromApi() {
    // Realiza GET para o endpoint
    // Retorna JSON que veio na response

    const climate = {
        temperature: '25°C',
        description: 'Ensolarado',
        humidity: 'Baixa',
        maximum: '32°C',
        minimum: '13°C'
    }

    return climate
}

const {temperature} = retrievesDataFromApi()
const {description, humidity} = retrievesDataFromApi()
const {minimum, maximum} = retrievesDataFromApi()

console.log(temperature) // 25°C
console.log(description) // Ensolarado
console.log(humidity) // Baixa
console.log(minimum) // 13°C
console.log(maximum) // 32°C

const colors = ['Azul', 'Cinza', 'Branco', 'Preto']
console.log(colors[0]) // Azul
console.log(colors[3]) // Preto

const [firstColor, secondColor, thirdColor, fourthColor, fifthColor] = colors

console.log(firstColor) // Azul
console.log(secondColor) // Cinza
console.log(thirdColor) // Branco
console.log(fourthColor) // Preto
console.log(fifthColor) // undefined

const contacts = [
    {name: 'Alex Júnior', phone: '1234-5678'},
    {name: 'Carolina Moya', phone: '1234-6789'},
    {name: 'Fernando Jorge', phone: '1234-5567'}
]

const [,Carol] = contacts

function showNumber({phone}) {
    console.log(phone)
}

showNumber(Carol) // 1234-6789

function showCarolsNumber([,{phone}]) {
    console.log(phone)
}

showCarolsNumber(contacts) // 1234-6789

const routes = {
    fast: ['Rodovia', 'Estrada X', 'Estrada Y']
}

const {fast: [firstRoute]} = routes
const {fast: [, secondRoute]} = routes
const {fast: [, , thirdRoute]} = routes

console.log(firstRoute) // Rodovia
console.log(secondRoute) // Estrada X
console.log(thirdRoute) // Estrada Y