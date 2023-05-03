const {storageModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL

/**
 * Obtener lista de la bdd!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({})

    res.send({data})
}

/**
 * Obtener detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {}

/**
 * Insertar Registro
 * @param {*} req 
 * @param {*} res 
 */
const crearItem = async(req, res) => {

    const { body, file } = req
    console.log(file)
    const fileDate = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileDate)
    res.send({data})
}

/**
 * Modificar Registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {}

/**
 * Eliminar Registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {}

module.exports = {getItems,getItem,crearItem,updateItem,deleteItem}