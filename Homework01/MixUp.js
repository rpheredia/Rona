function MixUp(string1,string2){
    var newString2 = string2.substring(0,2);
    var newString1 = string1.substring(0,2);
    var newstring1 = newString2 + string1.substring(2);
    var newstring2 = newString1 + string2.substring(2);
    var concatStrings = newstring1 + ' ' + newstring2;
    return concatStrings;
}

console.log(MixUp('mix', 'pod'));
console.log(MixUp('dog', 'dinner'));