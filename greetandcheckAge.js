const checkAge =  (age) => {
    if (age >=18) {
        console.log('Je bent 18 of ouder!');
        return true;
    } else if (age <= 18) {
        return false;
    }
}

const checkAge2 =  (age) => {
    var check = checkAge(age); 
    if (check == true) {
        console.log('Hello There!');
    }
    // if (checkAge(age) == 'True') {
    //     console.log('Hello There!');
    // } 
    if (check == false) {
            console.log('Hey Kiddo!');
        }
    return check;
}
console.log('Check leeftijd boven de 18')
var check=checkAge2(18);
console.log('De return waarde van de function:', check);
//
console.log('Check leeftijd onder de 18')
var check=checkAge2(17);
console.log('De return waarde van de function:', check);