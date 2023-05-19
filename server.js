const express = require('express');
const {graphqlHTTP} = require('express-graphql');
// const { buildSchema } = require('graphql');

const schema = require('./schema/schema');
const bodyParser = require('body-parser');
const mongodb = require('./db_connection/connect');
const contactRoute = require('./routes/index')
const cors = require('cors')
const port = process.env.PORT || 8080;
const app = express();

// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// const root = {
//   hello: () => 'Hello, World!'
// };

app.use('/graphql', graphqlHTTP({
  schema: schema,
  // rootValue: root,
  graphiql: true  // Enable GraphiQL
}));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Header',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
      );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');  
    next();
  })
  .use(cors())
  // here we are directing express-graphql to use this schema to map out the graph 
  // and directing express-graphql to use graphiql when goto '/graphql' address in the browser
  // which provides an interface to make GraphQl queries
  .use('/', contactRoute);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});