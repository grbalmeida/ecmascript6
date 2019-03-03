var weightOfTheBags = [12, 32, 21, 29]
var hasBagOverweight = weightOfTheBags.some(function(weightOfTheBag) {
    return weightOfTheBag > 30
})

console.log(hasBagOverweight)
// true