// Um promise possui 3 estados: não resolvido, resolvido, rejeitado

let promise = new Promise((resolve, reject) => {
    let result = true

    if(result) {
        resolve('Deu tudo certo 1!')
    } else {
        reject('Deu tudo errado 1!')
    }
})

promise
    .then(result => console.log(`Ok: ${result}`))
    .catch(error => console.log(`Erro: ${error}`)) // Deu tudo certo 1!

promise = new Promise((resolve, reject) => {
    let result = false
    let time = 2000
    setTimeout(() => {
        if(result) {
            resolve('Deu tudo certo 2!')
        } else {
            reject('Deu tudo errado 2!');
        }
    }, result)
})

promise
    .then(result => console.log(`Ok: ${result}`))
    .catch(error => `Erro: ${error}`) // Deu tudo certo 2!