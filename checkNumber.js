
var  cijfer = 100;

// Funtie check groter dan 100
function checkGetal(getal) {
    if (getal >= cijfer) {
        console.log("Het getal is groter dan " + cijfer);
        return true; 
    } else if (getal <= cijfer) {
        console.log("Het getal is kleiner dan " + cijfer);
        return false;
    }
}
console.log('Return waarde functie: ' +  checkGetal(101) );
