const express = require('express');
const router = express.Router();
const donorRoutes = require('./donors');

router.use('/donors', donorRoutes);

module.exports = router;
