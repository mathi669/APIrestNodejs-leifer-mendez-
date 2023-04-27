const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    res.send({a:1})
})

module.exports = router;