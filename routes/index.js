const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const filterController = require('../controllers/filterController');

// Student Routes
router.get('/students', studentController.getStudents);

// Filter Routes
router.get('/filter', filterController.applyFilter);

module.exports = router;
