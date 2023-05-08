const mongodb = require('../db_connection/connect');

const getData = async (req, res) => {
  const result = await mongodb.getDb().db().collection('User').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); // we just need the first one (the only one)
  });
};

module.exports = { getData };