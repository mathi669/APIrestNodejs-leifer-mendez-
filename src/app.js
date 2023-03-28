const express = require('express')
const cors = require('cors')
require('dotenv').config()
const dbConnect = require('../src/shared/config/mongo')
const app = express()


app.use(cors())

const port = process.env.PORT

app.listen(port, () => {
    console.log(`app listen on port http://localhost:${port}`)
})

dbConnect()