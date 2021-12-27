
let getal1 = 4;
let getal2 = 6;

//First way of function
function firstWay (num1, num2) {
    squNum1 = num1 * num1;
    squNum2 = num2 * num2;

    subTotal = squNum1 + squNum2;
    squTotal = subTotal * subTotal;
    return squTotal;
}

console.log('Function eerste manier: ', firstWay (getal1, getal2));


//Second way of functions: Expression
const secondWay = function ( num1, num2) {
    squNum1 = num1 * num1;
    squNum2 = num2 * num2;

    subTotal = squNum1 + squNum2;
    squTotal = subTotal * subTotal;

    return squTotal;
}

console.log('Function tweede manier: ', secondWay(getal1, getal2));

// Derde manier van berekenen
const thirthWay = (num1, num2) => {
    squNum1 = num1 * num1;
    squNum2 = num2 * num2;

    subTotal = squNum1 + squNum2;
    squTotal = subTotal * subTotal;
    return squTotal;
}

console.log('Function derde manier: ', thirthWay(getal1, getal2));
