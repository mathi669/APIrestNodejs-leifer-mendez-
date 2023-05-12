const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const {encrypt, compare} = require('../shared/utils/handlePassword')
const { handleHttpError } = require("../shared/utils/handleErrors");
const { tokenSign } = require("../shared/utils/handleJwt");

/**
 * Insertar Registro
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password)
    const body = {...req, password}
    const dataUser = await usersModel.create(body)
    dataUser.set('password', undefined, {strict:false});

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser
    }

    res.send({data})
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_USER");
  }
};

const loginUser = async() => {
  try {
    
  } catch (error) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
}

module.exports = { createUser, loginUser };
