const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.someOne);

module.exports = routes;