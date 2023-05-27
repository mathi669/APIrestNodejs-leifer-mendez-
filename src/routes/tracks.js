const express = require("express");
const {
  getItem,
  getItems,
  crearItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracksController");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const router = express.Router();

router.get("/", authMiddleware, getItems);
router.get("/:id", authMiddleware, validatorGetItem, getItem);
router.post(
  "/",
  authMiddleware,
  checkRol(["admin"]),
  validatorCreateItem,
  crearItem
);
router.put(
  "/:id",
  authMiddleware,
  validatorCreateItem,
  validatorGetItem,
  updateItem
);
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;
