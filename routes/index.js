const routes = require('express').Router();
const contacts = require('./contacts');
const swagger = require('./swagger');

routes.use('/', swagger);
routes.use('/contacts', contacts);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      RenderURL: 'https://project-week-4-api-documentation.onrender.com/',
    };
    res.send(docData);
  })
);

module.exports = routes;