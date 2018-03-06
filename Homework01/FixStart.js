function fixStart(string1){
    var firstcharinstring = new RegExp(string1.substring(0,1), "g");
    var newstring1 = string1.replace(firstcharinstring, '*');
    return newstring1;
}

console.log(fixStart('babble'));