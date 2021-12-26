
function calcAverageofnumbers (num1, num2, num3, num4, num5) {
    sum  = num1 + num2 + num3 + num4 + num5;
    average = sum / 5;
    return Math.round(average);
}

console.log ('Het gemidddelde is van de getallen: \"100, 200, 50, 20, 90:\" ', calcAverageofnumbers (100, 200, 50, 20, 90));

console.log ('Het gemidddelde is van de getallen: \"150, 235, 55, 65, 19:\" ', calcAverageofnumbers (150, 235, 55, 65, 19));

