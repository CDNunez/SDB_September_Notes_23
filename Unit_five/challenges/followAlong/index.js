const express = require('express'); // being pulled from node_modules
const app = express(); // simplifying the method call
const PORT = 4000; // server port within localhost. using 'ALL CAPS' to indicate a general variable

const { timeStamp } = require('./utils/middleware'); //importing functions from middleware
const routesController = require('./controllers/routes.controllers');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(`${__dirname}/public`));
app.use(timeStamp);

app.use('/routes', routesController);


//*Provides us feedback that it is running
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})