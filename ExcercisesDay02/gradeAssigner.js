function calcCircumference(radius){
    var circum = (2 * Math.PI * radius);
    return 'The circumference is ' + circum;
}

function calcArea(radius){
    var area = (Math.PI * radius * radius);
    return 'The area is ' + area;
}

console.log(calcCircumference(5));
console.log(calcArea(5));