let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
        "season one": [
            {
                episode_title: "Simpsons Roasting on an Open Fire",
                aired: '1989-12-17',

            },
            {
                episode_title: "Bart the Genius",
                aired: "1990-01-01",
            }
        ],
        "season two": [/*  */],
        "season three": [/*  */]
    },
    currently_running: true,
    characters: [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ],
}

const {characters, seasons} = theSimpsons;
console.log(characters); //allows to create quick points if interest to target or change values within keys of Objects

characters.push('Meo');
console.log(characters);
characters[5] = "Moe"; //can allow you to grab values from keys like such and modify
console.log(characters);

const {currently_running: on_air} = theSimpsons; //reassigns the variable for the key inside the object
console.log(on_air);
console.log(theSimpsons.currently_running);//still logs the value as the object has not been modified by the previous method

//! Spread with Objects

const simpsonsChar = {
    simpshonsHouse: [
        'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
    ],
    moesTavern: [
        "Moe", "Barney"
    ],
};

const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish',
};

const locations = {
    ...simpsonsChar, //adds the values from array simpsonsChar and adds them to locations object
    dmv: ['Patty', "Selma"], //assigns values to locations
    ... generalLocations, //adds values
};

console.log(locations);