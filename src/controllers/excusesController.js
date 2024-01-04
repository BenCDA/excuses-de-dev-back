const excuses = require('../data');

exports.listExcuses = (req, res) => {
    res.json(excuses);
};

exports.addExcuse = (req, res) => {
    const newExcuse = req.body;
    excuses.push(newExcuse);
    res.json(newExcuse);
};

exports.getExcuseByHttpCode = (req, res) => {
    const httpCode = req.params.http_code;
    const excuse = excuses.find((excuse) => excuse.http_code == httpCode);

    if (excuse) {
        res.status(httpCode).json(excuse);
    } else {
        res.status(404).json({error: 'Excuse non trouvée'});
    }
};
