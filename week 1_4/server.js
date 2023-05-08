const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db_connection/connect');
// const professionalRoutes = require('./routes/professional');
const contactRoute = require('./routes/contacts')

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
//   .use('/professional', professionalRoutes)
  .use('/', contactRoute);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});