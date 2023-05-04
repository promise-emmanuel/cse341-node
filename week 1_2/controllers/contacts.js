// const mongodb = require('../db_connection/connect');

// const getDataFromDatabase = async (req, res, next) => {
//   const result = await mongodb.getDb().db().collection('contacts').find();
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]); // we just need the first one (the only one)
//   });
// };
// const { ObjectId } = require('mongodb');
// const getDataFromDatabase = async (req, res, next) => {
//     const result = await mongodb.getDb().db('test').collection('contacts').findOne({ _id: ObjectId(req.params.id) });
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(result);
// };
  
// module.exports = { getDataFromDatabase };

const mongodb = require('../db_connection/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleData = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAllData, getSingleData };