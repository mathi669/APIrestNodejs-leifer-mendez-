const {tracksModel} = require('../models')

/**
 * Obtener lista de la bdd!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({})

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
    const { body } = req
    console.log(body)
    const data = await tracksModel.create(body)
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