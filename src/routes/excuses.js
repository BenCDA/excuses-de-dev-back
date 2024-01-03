// src/routes/excuses.js
const express = require('express');
const router = express.Router();
const excusesController = require('../controllers/excusesController');

router.get('/', excusesController.listExcuses);
router.post('/add', excusesController.addExcuse);

module.exports = router;
