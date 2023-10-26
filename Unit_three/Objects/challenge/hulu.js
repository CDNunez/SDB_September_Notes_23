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

//class follow along

let hulu = {
    id:1996,
    movies:[
        {
            title:"Title One",
            genre:"Animated",
            rating:"PG-13",
            run_time:130,
            year_released:1999,
        },{
            title:"Title Two",
            genre:"Adventure",
            rating:"M",
            run_time:"190",
            year_released:2018,
        },
    ],
    shows:[
        {
            title:"TV Show",
            numberOfSeasons:2,
            seasons: [
                {
                    season: 1,
                    numOfEpisodes: 2,
                    episodes: [
                        {
                            episode_title:"Season One Episode One",
                            aired:10-10-1994,
                        },
                        {
                            episode_title:"Season One Episode Two",
                            aired:10-17-1994,
                        },
                    ],
                },
                {
                    season: 2,
                    numOfEpisodes:2,
                    episodes: [
                        {
                            episode_title:"Season Two Episode One",
                            aired:10-10-1995,
                        },
                        {
                            episode_title:"Season Two Episode Two",
                            aired:10-17-1995,
                        },
                    ]
                },
            ]
        },
    ]
}

console.log(hulu.movies);//movie arrays
console.log(hulu.shows[0].title);//show title
console.log(hulu.shows[0].seasons[1].episodes[0].episode_title);//season two episode one