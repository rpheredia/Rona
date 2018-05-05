var arrayOne = ['F', 'O', 'X'];
var arrayGuessed = ['_', '_', '_'];
var rewardAmount = 0;

function guessLetter(letterGuessed) {
    if (arraySolved()) {
        return;
    }
    var countLetters = 0;
    for (var i = 0; i < arrayOne.length; i++) {
        if (letterGuessed == arrayOne[i]) {
            arrayGuessed[i] = letterGuessed;
            countLetters++;
            if (arraySolved()) {
                break;
            }
        }
    }
    if (arraySolved()) {
        rewardAmount = rewardAmount + (countLetters * Math.ceil(Math.random()));
        console.log('***************************************');
        console.log('***************************************');
        console.log(arrayGuessed);
        console.log('CONGRATULATIONS, you have WON! Total Points: ' + rewardAmount + '\n');
    } else if (countLetters > 0) {
        rewardAmount = rewardAmount + (countLetters * Math.ceil(Math.random()));
        console.log(arrayGuessed);
        console.log('We found ' + countLetters + ' ' + letterGuessed + 's. Points added. Reward is now : ' + rewardAmount + ' points!' + '\n');
    } else {
        rewardAmount = rewardAmount - (Math.ceil(Math.random()));
        console.log(arrayGuessed);
        console.log('Guess again, we found ' + countLetters + ' ' + letterGuessed + 's, Points deducted. Reward is now : ' + rewardAmount + ' points!' + '\n');

    }
}

function arraySolved() {
    if (arrayGuessed.length == arrayOne.length) {
        for (var j = 0; j < arrayOne.length; j++) {
            if (arrayGuessed[j] != arrayOne[j]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }

}


guessLetter('H');
guessLetter('O');
guessLetter('F');
guessLetter('X');
guessLetter('G');

