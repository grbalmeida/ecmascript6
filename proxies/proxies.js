class User {
    constructor(login, password) {
        this.login = login
        this.password = password
    }
}

const user = new User('SuperJS', '123')
console.log(user.login) // SuperJS
console.log(user.password) // 123

const proxy = new Proxy(user, {
    get(target, property) {
        console.log(`${property} foi solicitada!`)
        return target[property]
    }
})

console.log(proxy.login) 
// SuperJS
// SuperJS foi solicitada!
console.log(proxy.password)
// 123
// 123 foi solicitada!

const validator = {
    set(target, property, value) {
        if(property === 'age') {
            if(!Number.isInteger(value)) {
                throw new TypeError('A idade não é um número!')
            }
        }

        target[property] = value
    }
}

const secondUser = new Proxy({}, validator)
secondUser.age = 10
console.log(secondUser.age)

const thirdUser = new Proxy({}, validator)
// thirdUser.age = 'dez' - TypeError (A idade não é um número)
// thirdUser.age = {} - TypeError (A idade não é um número)
// thirdUser.age = true - TypeError (A idade não é um número)