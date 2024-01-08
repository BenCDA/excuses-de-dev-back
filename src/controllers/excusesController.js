const excusesData = require("../data");

exports.listExcuses = (req, res) => {
  res.json(excusesData);
};

exports.addExcuse = (req, res) => {
  const newExcuse = req.body;
  excusesData.push(newExcuse);
  res.json(newExcuse);
};

exports.getExcuseByHttpCode = (req, res) => {
  try {
    const httpCode = req.params.http_code;
    const excuse = excusesData.find((excuse) => excuse.http_code == httpCode);

    if (excuse) {
      res.status(200).json(excuse);
    } else {
      res.status(404).json({ error: "Excuse non trouvée" });
    }
  } catch (error) {
    console.error("Error in getExcuseByHttpCode:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
