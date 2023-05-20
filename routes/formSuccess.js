const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.post('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'form-success.html'))
});

module.exports = router;