const PI = Math.PI

function length(radius) {
    return 2 * PI * radius
}

function area(radius) {
    return PI * (radius * radius)
}

export default length
export {PI, area}