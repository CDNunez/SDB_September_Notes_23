const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT;


// const testingBcrypt = string => {
//     let encrypt = bcrypt.hashSync(string,10)
//     console.log('ENCRYPT: ', encrypt);
// }

router.post('/signup', async(req, res) => {

    // testingBcrypt('password');
    // testingBcrypt('password');
    // testingBcrypt('NEWpassword');
    
    try {
        console.log(req.body);
        //Create a new object based off the model schema
        const user = new User({
            firstName: req.body.first ? req.body.first : 'please update first name',
            lastName: req.body.last ? req.body.last : 'please update last name',
            email: req.body.email,
            // password: req.body.password
            password: bcrypt.hashSync(req.body.password, 13)
        });
        // console.log(user);
        const newUser = await user.save();
        // writes to database. Returns a response - why we need an "await".

        const token = jwt.sign({id: newUser._id}, 'secret message', {expiresIn: "1 day"});

        res.status(200).json({
            user: newUser,
            message: 'Success!! User Created!',
            token
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

router.post('/login', async(req,res) => {
    try{
        //1. Capture data provided by user (req.body).
        const { email, password } = req.body;
        //2. Check database to see if email supplied exists
        const user = await User.findOne({email: email});
        //* A mongoDB method that accepts a query as an argument. Returns an instance of a document that matches.
        // console.log(user);
        if(!user) throw new Error('Email or Password does not match');
        //3. If email exists, consider if password matches.
        const passwordMatch = await bcrypt.compare(password, user.password);
        // boolean value
        //*compare(string, hashed value)
        if(!passwordMatch) throw new Error('Email or Password does not match');
        //4. After verified, provide a jwt token
        const token = jwt.sign({id: user._id}, SECRET, {expiresIn: 60 * 60 * 24});
        //5. response status returned
        res.status(200).json({
            message: "Successful",
            user, token
        })
    } catch (err) {
        res.status(500)({
            ERROR: err.message
        })
    }
})

module.exports = router;