const { check } = require("express-validator");
const validateResults = require("../shared/utils/handleValidator");


const validatorRegisister = [
  check("name").exists().notEmpty().isLength({min: 3, max:99}),
  check("age").exists().notEmpty().isNumeric(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({min: 3, max:15}),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorLogin = [
  check("password").exists().notEmpty().isLength({min: 3, max:15}),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];



module.exports = { validatorRegisister, validatorLogin };
