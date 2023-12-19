const express = require('express'); // being pulled from node_modules
const index = express(); // simplifying the method call
const PORT = 4000; // server port within localhost. using 'ALL CAPS' to indicate a general variable

const { logTime } = require('./utils/middleware');
const routesController = require('./controllers/routes.controllers');

index.use(logTime);
index.use(express.json());
index.use(express.urlencoded());
index.use(express.static(`${__dirname}/public`));

index.use('/routes', routesController);

index.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    //provides us feedback that it is running
})