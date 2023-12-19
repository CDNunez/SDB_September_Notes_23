const express = require('express'); // being pulled from node_modules
const app = express(); // simplifying the method call
const PORT = 4000; // server port within localhost. using 'ALL CAPS' to indicate a general variable

//*Imports
const practiceController = require('./controllers/practice.controller');
const authController = require('./controllers/auth.controller');
const routesController = require('./controllers/routes.controller');
const { logTime } = require('./utils');


//*Middleware
app.use(logTime);
app.use(express.urlencoded()); //parse the body from our browser so it can display the response.
app.use(express.json()); //Provides us access to use JSON within our routes
app.use(express.static(`${__dirname}/public`));
//IntroToExpress/public
// console.log('pathway: ', __dirname);

//*Controller
app.use('/practice', practiceController);
app.use('/todo', authController);
app.use('/routes', routesController);
/* 
    Any traffic coming in that has "practice" after localhost:400 will route to practice.controller.js
        example: localhost:4000/practice
*/

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    //provides us feedback that it is running
})