const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../shared/utils/handleStorage");
const { crearItem } = require("../controllers/storageController");

router.post("/", uploadMiddleware.single("myfile"), crearItem);

module.exports = router;
