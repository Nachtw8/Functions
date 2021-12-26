const maxNumber = 100; // maximum aantal klanten in de pub
var currentNummer = 50; // actuele aantal klanten
const minAge = 18;//minimum leeftijd voor toegang

function aantalKlanten (curSum, age) {
if ( age < 18 )  {
    return console.log ('this is a club for adults');
    }
if ( age >= 18 && curSum < 100) {
    return console.log ('Come in. You are welkom');
    }

if ( age >= 18 && curSum >= 100) {
   return  console.log ("it's too busy now, come back later");
    }
}

aantalKlanten(99,30)

aantalKlanten(105,30)

aantalKlanten(55,18)

aantalKlanten(99,17)

