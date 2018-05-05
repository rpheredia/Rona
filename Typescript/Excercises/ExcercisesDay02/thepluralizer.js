function pluralize(noun, number){
    if (number == 1) {
        return (number + ' ' + noun);
    } else  {
        var newNoun = '';
        if (noun == 'goose') {
            newNoun = 'geese';
        } else if (noun == 'sheep') {
            newNoun = 'sheep';
        } else if (noun == 'scissors') {
            newNoun = 'scissors';
        } else if (noun == 'knife') {
            newNoun = 'knives';
        } else {
            newNoun = (noun + 's');
        }
        
        return (number + ' ' + newNoun);
    }

}

console.log(pluralize('cat',3));
console.log(pluralize('sheep',3));
console.log(pluralize('knife',1));
console.log(pluralize('knife',3));