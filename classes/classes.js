class Car {
    constructor(model, chassis, numberOfDoors) {
        this.model = model
        this.chassis = chassis
        this.numberOfDoors = numberOfDoors
    }

    drive() {
        console.log('vrum vrum')
    }
}

const basicCar = new Car('Básico', '123123', 2)

console.log(basicCar.model) // Básico
console.log(basicCar.chassis) // 123123
console.log(basicCar.numberOfDoors) // 2

class Sonix extends Car {
    constructor(model, chassis, numberOfDoors) {
        super(model, chassis, numberOfDoors)
    }

    openSunroof() {
        console.log('Abrindo teto solar')
    }
}

const sonix = new Sonix()
sonix.drive() // vrum vrum
sonix.openSunroof() // Abrindo teto solar

const secondSonix = new Sonix('Sonix', '9120219', 4)
console.log(secondSonix.model) // Sonix
console.log(secondSonix.chassis) // 9120219
console.log(secondSonix.numberOfDoors) // 4

// Hoisting não existe em classes, é preciso que a classe esteja declarada para instânciá-la

const MyClass = class {
    constructor(name) {
        this.name = name
    }
}

const instance = new MyClass('Classe 1')
console.log(instance.name) // Classe 1

class Home {
    static openDoor() {
        console.log('Abrindo porta')
    }
}

Home.openDoor() // Abrindo porta

// Atributos privados com WeakMap

const properties = new WeakMap()

class VideoGame {
    constructor(name, controls, output, media) {
        properties.set(this, {name, controls, output, media})
    }

    retrieveProperty(property) {
        return properties.get(this)[property]
    }
}

const xBox360 = new VideoGame('XBox360', 4, 'hdmi', 'dvd')
console.log(xBox360.name) // undefined

console.log(xBox360.retrieveProperty('name')) // XBox360
console.log(xBox360.retrieveProperty('controls')) // 4
console.log(xBox360.retrieveProperty('output')) // hdmi
console.log(xBox360.retrieveProperty('media')) // dvd