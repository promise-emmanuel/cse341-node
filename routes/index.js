const routes = require('express').Router();
const contacts = require('./contacts');
const swagger = require('./swagger');

routes.use('/', swagger);
routes.use('/contacts', contacts);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: '',
    };
    res.send(docData);
  })
);

module.exports = routes;