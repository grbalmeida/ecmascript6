function Car(model, chassis, numberOfDoors) {
    this.model = model
    this.chassis = chassis
    this.numberOfDoors = numberOfDoors
}

const prototype = new Car('Protótipo 1', '1290381209', 2)

console.log(prototype.model) // Protótipo 1
console.log(prototype.chassis) // 1290381209
console.log(prototype.numberOfDoors) // 2

Car.prototype.drive = function() {
    console.log('vrum vrum')
}

prototype.drive() // vrum vrum

const sonix = new Car('Sonix', '9120219', 4)

console.log(sonix.model) // Sonix
console.log(sonix.chassis) // 9120219
console.log(sonix.numberOfDoors) // 4
sonix.drive() // vrum vrum

function Sonix(model, chassis, numberOfDoors) {
    Car.call(this, model, chassis, numberOfDoors)
}

Sonix.prototype = Object.create(Car.prototype)
Sonix.prototype.constructor = Car

const secondSonix = new Sonix('Sonix', '9120219', 4)
secondSonix.drive()

Sonix.prototype.openSunroof = function() {
    console.log('Abrindo teto solar')
}

secondSonix.openSunroof() // Abrindo teto solar