const express = require('express');
const router = express.Router();

const travelController = require('../controller/travelController.js')
router.get( '/', travelController);


module.exports = router;