function verbing(string1){
    var strlength = string1.length;
    var newString = string1;
    if (strlength >= 3) {
        if (string1.endsWith('ing')){
            var newString = string1 + 'ly ';
        } else {
            var newString = string1 + 'ing';
        }
    }
    return newString;
}

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));