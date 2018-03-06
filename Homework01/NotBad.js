function notBad(string1){
    console.log(string1);
    
    var notsearch = string1, substring1 = 'not';
    var badsearch = string1, substring2 = 'bad';
    var positionofnot = notsearch.indexOf(substring1);
    var positionofbad = badsearch.indexOf(substring2);

    var newString = string1;
    console.log('positionofbad: ' + positionofbad);
    console.log('positionofnot: ' + positionofnot);
    if ((positionofbad > positionofnot) && positionofbad > 0 && positionofnot >= 0) {
        newString = string1.substring(0, positionofnot - 1) + ' good' + string1.substring(positionofbad + 3 );
        return newString;
    }
    return newString;
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
