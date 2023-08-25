var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller')

router.get('/check-email', userController.checkUserAlreadyExists)
router.get('/profile/:id', userController.getProfile)
router.put('/update-user/:id', userController.updateUser)

module.exports = router;
