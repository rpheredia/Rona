function DrEvil(amount){
    if (amount < 1000000) {
        var DisplayText = amount + ' dollars';
    } else {
        var DisplayText = amount + ' dollars (pinky)';
    }
    return DisplayText;
}

console.log(DrEvil(2500500));