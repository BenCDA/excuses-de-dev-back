const excuses = require('../data');

exports.listExcuses = (req, res) => {
    res.json(excuses);
};

exports.addExcuse = (req, res) => {
    const newExcuse = req.body;
    excuses.push(newExcuse);
    res.json(newExcuse);
};
