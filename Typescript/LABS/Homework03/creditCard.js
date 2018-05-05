

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function sumAll(n) {
    var accumValue = 0;
    for (i = 0; i < n.length; i++) {
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

function luhnAlgorithm(creditCardNumber){
    var result = 0;
    for (i = 0; i < (Math.ceil(creditCardNumber.length) - 1); i++){
        if ((i%2) == 0){
            result = result + Math.ceil(creditCardNumber[i]);
        } else {
            if ((Math.ceil(creditCardNumber[i]) * 2) > 9) {
                result = result + (Math.ceil(creditCardNumber[i]) * 2) - 9;
            } else {
                result = result + Math.ceil(creditCardNumber[i]) * 2;
            }
        }             
    }   
    result = result + Math.ceil(creditCardNumber[creditCardNumber.length - 1]);
    
    return (result % 10 == 0);

}
function isCardValid(creditCardNumber) {
    var Results = {
        valid: false,
        number: creditCardNumber,
        error: " "
    };
    var cardNumber = replaceAll(creditCardNumber, "-", "");
    if (!isNumeric(cardNumber)) {
        Results.error = 'Non-numeric_chars';
        //console.log("INVALID. Card Number contains non-numeric values.\n");
    } else if (cardNumber.length != 16) {
        Results.error = 'Not_16_chars';
        //console.log("INVALID. Card Number must be 16 digits.\n");
    } else if (!((cardNumber.substring(15, 16)) % 2 == 0)) {
        Results.error = 'Odd_number_last_char';
        //console.log("INVALID. Card Number contains odd number in last digit.\n");
    } else if (sumAll(cardNumber) < 16) {
        Results.error = 'Sum_digits_less_than_16';
        //console.log("INVALID. Sum of all digits less than 16.\n");
    } else if (!diffChars(cardNumber)) {
        Results.error = 'All_chars_same';
        //console.log("INVALID. All digits cannot be the same.\n");
    } else {
        //Results.valid = true;
        console.log("Validate via Luhn Algorithm!\n");
        Results.valid = luhnAlgorithm(cardNumber);
        if (Results.valid == false) {
            Results.error = 'Fail_Luhn_Algorithm';
        }
        //console.log("Card Number is VALID!\n");
    }
    return Results;
}

function processCard(ccnumber){
    console.log(isCardValid(ccnumber));
    console.log("\n");
}

processCard("a923-3211-9c01-1112");
processCard("4444-4444-4444-4444");
processCard("1111-1111-1111-1110");
processCard("6666-6666-6666-6661");
processCard("4915-5555-5555-1112");
processCard("4923-9378-2721-2132");




