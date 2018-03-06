var choicesArray = ['red', 'pink','blue','orange'];

for (var i = 0; i < choicesArray.length; i++) {
    var suffix = '';
    if (i == 0) {
        suffix = 'st';
    } else if (i == 1) {
        suffix = 'nd';
    } else if (i == 2) {
        suffix = 'rd'
    } else {
        suffix = 'th';
    }
    console.log('My ' + (i + 1) + suffix + ' choice is ' + choicesArray[i]);

}