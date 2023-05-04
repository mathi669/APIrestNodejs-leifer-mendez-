const express = require('express')
const cors = require('cors')
require('dotenv').config()
const dbConnect = require('../src/shared/config/mongo')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("../src/shared/storage"))

const port = process.env.PORT

app.use("/api", require("../src/routes"))

app.listen(port, () => {
    console.log(`app listen on port http://localhost:${port}`)
})

dbConnect()