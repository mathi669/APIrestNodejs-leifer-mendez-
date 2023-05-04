const fs = require('fs')
const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../shared/utils/handleErrors");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../shared/storage`;

/**
 * Obtener lista de la bdd!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
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
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_DETAIL_ITEM");
  }
};

/**
 * Insertar Registro
 * @param {*} req
 * @param {*} res
 */
const crearItem = async (req, res) => {
  try {
    const { body, file } = req;
    console.log(file);
    const fileDate = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    const data = await storageModel.create(fileDate);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM");
  }
};


/**
 * Eliminar Registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne({_id:id})
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`

        fs.unlinkSync(filePath)
        const data = {
            filePath,
            deleted:1
        }

        res.send({ data });
      } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_DELETE_ITEM");
      }
};

module.exports = { getItems, getItem, crearItem, deleteItem };
