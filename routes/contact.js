const express = require('express');

const router = express.Router();

const contactUSController = require('../controllers/contactUs');

router.get('/contact-us', contactUSController.getContactUs);

router.post('/contact-us', contactUSController.postContactUS);

module.exports = router;