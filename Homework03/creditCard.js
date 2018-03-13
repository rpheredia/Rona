function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
function sumAll(n) {
    var accumValue = 0;
    for (i = 0; i < n.length; i++){
        accumValue = accumValue + Math.ceil(n[i]);
        if (accumValue >= 16) { 
            return accumValue;
        }
    } 
    return accumValue;
  
}
function diffChars(string1) {
    for (i = 0; i < (string1.length - 1); i++) {
        if (string1[i] != string1[i + 1]) {
            return true;
        }
    }
    return false;
}

function isCardValid(cardNumber){
    if (!isNumeric(cardNumber)) {
        console.log("INVALID. Card Number contains non-numeric values.\n");
    } else if (cardNumber.length != 16 )  {
        console.log("INVALID. Card Number must be 16 digits.\n");
    } else if (!((cardNumber.substring(15,16))%2 == 0) ) {
        console.log("INVALID. Card Number contains odd number in last digit.\n");
    } else if (sumAll(cardNumber) < 16) {
        console.log("INVALID. Sum of all digits less than 16.\n");
    } else if (!diffChars(cardNumber)){
        console.log("INVALID. All digits cannot be the same.\n");
    } else {
        console.log("Card Number is VALID!\n");
    }
}

var creditCardNumber = replaceAll("a923-3211-9c01-1112", "-", "");
console.log("Card Number: " + creditCardNumber );
isCardValid(creditCardNumber);

var creditCardNumber = replaceAll("4444-4444-4444-4444", "-", "");
console.log("Card Number: " + creditCardNumber );
isCardValid(creditCardNumber);

var creditCardNumber = replaceAll("1111-1111-1111-1110", "-", "");
console.log("Card Number: " + creditCardNumber );
isCardValid(creditCardNumber);

var creditCardNumber = replaceAll("6666-6666-6666-6661", "-", "");
console.log("Card Number: " + creditCardNumber );
isCardValid(creditCardNumber);

var creditCardNumber = replaceAll("4915-5555-5555-1112", "-", "");
console.log("Card Number: " + creditCardNumber);
isCardValid(creditCardNumber);



