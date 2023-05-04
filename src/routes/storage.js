const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../shared/utils/handleStorage");
const { validatorGetItem } = require('../validators/storage')
const { crearItem, getItems, getItem, deleteItem } = require("../controllers/storageController");

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", uploadMiddleware.single("myfile"), crearItem);
router.delete("/:id", validatorGetItem, deleteItem)

module.exports = router;
