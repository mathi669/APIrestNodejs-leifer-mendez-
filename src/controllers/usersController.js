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

const loginUser = async(req, res) => {
  try {
    req = matchedData(req)
    const user = await usersModel.findOne({email:req.email})
    if(!user){
      handleHttpError(res, "USER_NOT_EXIST", 404);
      return
    }

    const hashPassword = user.password;
    const check = await compare(req.password, hashPassword)

    if(!check){
      handleHttpError(res, "Invalid_password", 401);
      return
    }

    user.set('password', undefined, {strict: false})
    const data = {
      token: await tokenSign(user),
      user
    }

    res.send({data})

  } catch (error) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
}

module.exports = { createUser, loginUser };
