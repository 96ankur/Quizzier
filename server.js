const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');
const error = require('./middleware/error');
const winston = require('winston');

require('./startup/logging')();
require('./startup/db')();
require('./startup/config')();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,client-token,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/user', routes)
app.use(error);

const PORT = process.env.port || 5000


app.listen(PORT, () => {
    winston.info(`Listening on port ${PORT}`);
})