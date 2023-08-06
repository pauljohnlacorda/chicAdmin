const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const passport = require('passport');

router.get('/register', usersController.registrationForm);
router.post('/register', usersController.registerUser);
router.get('/', usersController.loginForm);
router.post('/', passport.authenticate('local', {failureFlash: true, failureRedirect: '/'}), usersController.loginUser);
router.post('/', usersController.logout);



module.exports = router;
