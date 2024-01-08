const express = require("express");
const router = express.Router();
const excusesController = require("../controllers/excusesController");

router.get("/", excusesController.listExcuses);
router.get("/:http_code", excusesController.getExcuseByHttpCode);
router.post("/add", excusesController.addExcuse);

module.exports = router;
