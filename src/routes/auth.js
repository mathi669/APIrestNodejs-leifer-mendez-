const express = require("express");
const router = express.Router();
const { validatorRegisister, validatorLogin } = require('../validators/auth');
const { createUser, loginUser } = require("../controllers/usersController");

/***
 * Crear reistro
 */
router.post('/register', validatorRegisister, createUser);
router.post('/login', validatorLogin, loginUser);


module.exports = router