const vatH = 21;
const vatM = 9;
const vatL = 0;

//Calculate the price of the product inclisive VAT
const calcVat = function (price, vat) {
    pricePrd = price * (1 + ( vat / 100)); 

    console.log ('Price incl. VAT of the product is: ', pricePrd);
}

const berekenVat = function () {
    var pricprd = 100;
    var vat = vatM;
    calcVat (pricprd, vat);
};

berekenVat ();

//Callculate the base prices of a product
const calcBaseprice = function (price, vat) {
    var baseprice = price / ( 1 + (vat/100) );
    console.log ('Price excl. VAT of the product is: ', baseprice);
}

const basePrice = function () {
    priceprd= 100;
    var vat = vatH;
    calcBaseprice (priceprd, vat);
}

basePrice();
