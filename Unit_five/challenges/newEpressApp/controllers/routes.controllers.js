const router = require('express').Router();
const data = require('../data.json');

router.get('/', (req, res) => {
    try {
        res.status(200).json({
            results: data
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

module.exports = router;