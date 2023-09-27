
//random number generator function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//console.log(getRandomInt(8)); prints random whole number from 0 to 7

let fortunePhrases = ['Ask again later', 'Not Likely', 'Most Likely', 'Do not count on it', 'You may rely on it', 'Better not tell you now', 'It is certain', 'Cannot Predict Now'];

//console.log(fortunePhrases[2]); test to print fortunePhrases

if (getRandomInt(8) < 8) {
    console.log(fortunePhrases[4]);
} else {
    console.log('idk');
}