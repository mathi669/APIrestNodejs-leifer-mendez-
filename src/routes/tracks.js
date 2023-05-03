const express = require("express");
const { getItem, getItems, crearItem, updateItem, deleteItem } = require("../controllers/tracksController");
const { validatorCreateItem } = require('../middleware/tracks')
const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/',validatorCreateItem, crearItem);
router.put('/', updateItem);
router.delete('/', deleteItem);


module.exports = router