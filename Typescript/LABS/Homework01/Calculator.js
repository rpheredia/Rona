function squareNumber(anumber){
    var numbersquared = anumber * anumber;
    console.log('The result of squaring the number ' + anumber + ' is ' + numbersquared + '.');
    return numbersquared;
}

function halfNumber (anumber){
    var numberdivide2 = anumber / 2;
    console.log('Half of ' + anumber + ' is ' + numberdivide2);
    return numberdivide2;
}

function percentOf(num1, num2){
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

function areaOfCircle(radius){
    var area = radius * radius * Math.PI;
    console.log('The area for a circle with radius ' + radius + ' is ' + area + '.');
    var arearounded = (area).toFixed(2);
    console.log('The area rounded to two decimal places is ' + arearounded);
    return arearounded;
}

function NumOperation(number){
    var resultHalfnumber = halfNumber(number);
    var resultSquare = squareNumber(resultHalfnumber);
    var resultArea = areaOfCircle(resultSquare);
    var resultPercent = percentOf(resultArea,resultSquare);
}

NumOperation(35);
