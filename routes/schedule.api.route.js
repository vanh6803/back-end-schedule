var express = require('express');
var router = express.Router();
var scheduleController = require('../controllers/schedule.controller')

router.get('/', scheduleController.getSchedule)

module.exports = router;
