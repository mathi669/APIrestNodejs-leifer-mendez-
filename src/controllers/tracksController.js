const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../shared/utils/handleErrors");

/**
 * Obtener lista de la bdd!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const user = req.user
    const data = await tracksModel.find({});
    res.send({ data, user });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

/**
 * Obtener detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "error_get_item")
    }
};

/**
 * Insertar Registro
 * @param {*} req
 * @param {*} res
 */
const crearItem = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await tracksModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

/**
 * Modificar Registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
    try {
        
        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(
            id, body
        );
        res.status(200);
        res.send({ data });
      } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS");
      }
};

/**
 * Eliminar Registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.deleteOne({_id:id})
        
        res.send({ data })
    } catch (error) {
        console.log(error);
        handleHttpError(res, "error_delete_item")
    }
};

module.exports = { getItems, getItem, crearItem, updateItem, deleteItem };
