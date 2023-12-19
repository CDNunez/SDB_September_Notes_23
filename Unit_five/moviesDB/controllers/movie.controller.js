const router = require('express').Router();
const Movie = require('../models/movie.models');
const { errorResponse } = require('../utils'); //will target index by default if no other file is targetted

/////toDo POST
router.post('/', async(req,res) => {
    try {
        //*1) pull data from client (body)
        const { 
            title, genre, rating, length, releaseYear
         } = req.body;
        //*2) create a new object using the model
         const movie = new Movie({
            title, genre, rating, length, releaseYear
         }); //shaping the object the same as the pulled data simplifies the code if the object will be the same as schema/data pulled
        //*3) save the object to the DB
         const newMovie = await movie.save();
        //*4) response to client
         res.status(200).json({
            message: `${newMovie.title} added to collection`,
            newMovie
         })

    } catch (err) {
        errorResponse(res,err)
    }
});
/////toDo GET ALL
router.get('/', async(req,res) => {
    try {
        // const allMovies = await Movie.find({});
        // if(!allMovies || allMovies.length === 0){
        //     throw new Error('No title found')
        // } else {
        //     res.status(200).json({
        //         message: 'All movies',
        //         allMovies
        //     })
        // } this works as well
        const allMovies = await Movie.find();

        allMovies ?
            res.status(200).json({
                result: allMovies
            }):
            res.status(404).json({
                result:"No movies found"
            })
    } catch (err) {
        errorResponse(res,err)
    }
});
/////toDo Get One
router.get('/find-one/:id', async(req,res) => {
    try {
        // const movieId = await Movie.findOne({_id: _id});
        // if(!movieId) {
        //     throw new Error('No movie found')
        // } else {
        //     res.status(200).json({
        //         message: "found by id",
        //         movieId
        //     })not surer if this works
        const { id } = req.params;
        const getMovie = await Movie.findOne({_id: id});

        if(!getMovie) throw new Error('no movie found');

        res.status(200).json({
            results: getMovie
        })

    } catch (err) {
        errorResponse(res,err)
    }
});
/////toDO GET ALL by Genre
router.get('/genre/:genre', async(req,res) => {
    try {
        const { genre } = req.params;
        let pedroPascal; //set required genre entered to be pascal case or first uppercase and rest lower case

        if(genre) { 
        //     for(let i = 0; i < genre.length; i++) {
        //         i == 0 ?
        //             pedroPascal = genre[i].toUpperCase() :
        //             pedroPascal += genre[i].toLowerCase();
        //     }
        // }
        for (let i= 0; i < genre.length; i++){
            if( i === 0) {
                pedroPascal = genre[i].toUpperCase();
            } else if(genre[i-1] === "-") {
                pedroPascal += genre[i].toUpperCase();
            } else {
                pedroPascal += genre[i].toLowerCase();
        }
        }
        const movieGenre = await Movie.find({genre: pedroPascal});

        if (movieGenre.length === 0) throw new Error('No genre found');

        res.status(200).json({
            results: movieGenre
        })
    }
    } catch (err) {
        errorResponse(res,err)
    }
});
//toDO PATCH/PUT One
router.patch('/', async(req,res) => {
    try {
        
    } catch (err) {
        errorResponse(res,err)
    }
});
//toDO DELETE One
router.delete('/:id', async(req,res) => {
    try {
        //1) capture data (ID)
        const { id } = req.params;
        
        //2) use a delete method to locate and remove
        const deleteMovie = await Movie.deleteOne({_id: id});
        console.log(deleteMovie);
        //3) respond to client
        deleteMovie.deletedCount ?
        res.status(200).json({
            results: 'Movie removed'
        }) :
        res.status(404).json({
            results:"No movie in collection"
        });
    } catch (err) {
        errorResponse(res,err)
    }
});

module.exports = router;