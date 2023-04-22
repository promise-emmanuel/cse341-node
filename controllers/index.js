const awesomeFunction = (req, res, next) => {
    res.json('Awesome Person');
};

// to create another route
const someOne = (req, res, next) => {
    res.json('Doris Nzei');
};
module.exports = {awesomeFunction, someOne};