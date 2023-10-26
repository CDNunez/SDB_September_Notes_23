/* 
*    Objects
*/

let marvelHero = {
    fullName: "Peter Parker",
    codeName: "Spider-Man",
    age: 25,
    active: true,
}

/* 
*   Object Literal
    values are written within the keys
        -hard coded

*Structure

    keyword objectName = {
        key: value,
        key: value,
    }

?Objects are dictionaries - way to store data
*/


//object holding an object holding arrays holding objects
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
}

console.log(theSimpsons.seasons["season one"][0].episode_title);
//console.log(theSimpsons.seasons["season two"]);//empty []
console.log(theSimpsons.genre);//dot notation
console.log(theSimpsons['genre'])//square bracket notation

theSimpsons.characters = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']; //adds key of character with the array value to the object
console.log(theSimpsons.characters);

/* 
    - Use an array method to add another character to the the character array.
    - console.log just the characters from theSimpson object.
*/

theSimpsons.characters.push("Milhouse"); //adds item to the array within the object
console.log(theSimpsons.characters);

theSimpsons.currently_running = false; //change values within object keys 
console.log(theSimpsons.currently_running);

theSimpsons.seasons["season one"][1].aired = "1990-01-14";
console.log(theSimpsons.seasons["season one"][1]);

/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/

let hulu = {
    id: 1996,
    movies: {
        "movie one": [
            {
                title: "Title One",
                genre: "Animated",
                rating: "10/10",
                releaseDate: 1999,
            }
        ],
        "movie two": [
            {
                title: "Title Two",
                genre: "Romance",
                rating: "5/10",
                releaseDate: 2010,
            }
        ],
    },
    shows: {
        title: "Show Title",
        seasons: {
            "number of seasons": 2,
            "season one":[1, {
                "episode one": [1, {
                    title:"Season One Episode One",
                    aired:10-10-1994,
                }],
                "episode two": [2, {
                    title:"Season One Episode Two",
                    aired:10-17-1994,
                }],
            }],
            "season two":[2, {
                "episode one":[1, {
                    title:"Season Two Episode One",
                    aired:10-10-1995,
                }],
                "episode two":[2, {
                    title:"Season Two Episode Two",
                    aired:10-17-1995,
                }],
            }],
        }
    },
}

console.log(hulu.movies);//movies array
console.log(hulu.shows.title);//show title
console.log(hulu.shows.seasons["season two"][1]["episode one"][1].title);//season two episode one

