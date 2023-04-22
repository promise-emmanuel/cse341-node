const awesomeFunction = (req, res, next) => {
    res.json('Kindness Osoh');
};

// to create another route
const someOne = (req, res, next) => {
    res.json('Doris Nzei');
};
module.exports = {awesomeFunction, someOne};