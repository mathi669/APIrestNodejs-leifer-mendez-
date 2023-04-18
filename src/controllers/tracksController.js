/**
 * Obtener lista de la bdd!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = (req, res) => {
    const data = ["hola", "mundo"]

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
const crearItem = (req, res) => {}

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