const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// /user => GET
router.get('/users', userController.getUsers);

// /user/:id => GET
router.get('/user', userController.getUser);
//router.get('/user/:id', userController.getUser);

// /user => POST
router.post('/user', userController.addUser);

// /user => DELETE
router.delete('/user', userController.deleteUser);

module.exports = router;
