
function paintWall() {
    console.log("The Wall has been painted red");
};

let paint = paintWall();

// Funtie met 1 x parameter
function paintWall1(kleur) {
    if (kleur == 'green') {
        console.log("The Wall has been painted " + kleur);
    }
    else if (kleur == 'blue') {
        console.log("The Wall has been painted " + kleur);
    }
    else {
        console.log ('Kleur is anders namelijk :' + kleur);
    }
};

 paintWall1("green");
 paintWall1("blue");
 paintWall1("Grey");

 // Functie met twee parameters
function paintWalls(north, south) {
    console.log("The north Wall has been painted " + north);
    console.log("The south Wall has been painted " + south);   
};

paintWalls('orange', 'grey');

paintWalls('Grey', 'Orange');

