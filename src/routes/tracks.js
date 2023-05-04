const express = require("express");
const { getItem, getItems, crearItem, updateItem, deleteItem } = require("../controllers/tracksController");
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks')
const customHeader = require('../middleware/customHeader')
const router = express.Router();

router.get('/', getItems);
router.get('/:id', validatorGetItem, getItem);
router.post('/',validatorCreateItem, crearItem);
router.put('/:id', validatorCreateItem, validatorGetItem, updateItem);
router.delete('/:id',validatorGetItem, deleteItem);


module.exports = router