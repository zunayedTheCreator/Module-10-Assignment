const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

router.post('/', studentsController.createStudent);
router.get('/', studentsController.getStudents);

module.exports = router;