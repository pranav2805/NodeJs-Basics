const express = require('express');

const router = express.Router();

const formSuccController = require('../controllers/formSucc');

router.post('/success', formSuccController.getSuccess);

module.exports = router;