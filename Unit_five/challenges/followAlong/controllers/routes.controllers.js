const router = require('express').Router();
const data = require('../data.json');
const { timeStamp } = require('../utils/middleware');

const errorHandling = (res, err) => {
    res.status(500).json({
        error: err.message
    })
}

router.get('/', (req, res) => {
    try {
        // console.log(req);
        res.status(200).json({
            results: data,
            timestamp: req.timeStamp,
        })
    } catch (err) {
        // res.status(500).json({
        //     error: err.message
        // })
        errorHandling(res, err);
    }
})

router.get('/find-one/:id', (req, res) => {
    console.log(req.params);
    try {
        let { id } = req.params;
        let results = data.filter(i => i.id == id);

        console.log(results);

        if(results.length !==0){
            res.status(200).json({
                results: results[0],
                timestamp: req.timeStamp
            })
        } else {
            throw new Error('No book or something like that')
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

router.get('/query/', (req,res) => {
    try{
        const { title } = req.query;
        let results = data.filter(i => i.title.toLowerCase() == title.toLowerCase());

        if( results.length > 0 ){
            res.status(200).json({
                results: results[0], //whole object
                // results: {title: `${title}`},
                timestamp: req.timeStamp,
            })
        } else {
            throw new Error('Title not found');
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

router.post('/titleAuthor', (req, res) => {
    try{
        const { title, author } = req.body;

        res.status(200).json({
            title: title,
            author: author,
            timestamp: req.timeStamp
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

})

module.exports = router;