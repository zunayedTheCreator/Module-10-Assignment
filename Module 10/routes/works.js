const express = require('express');
const router = express.Router();
const worksController = require('../controllers/worksController');

router.post('/', worksController.createWork);
router.get('/', worksController.getWorks);
// Add more routes as needed

module.exports = router;
