const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()


app.use(cors())

const port = process.env.PORT

app.listen(port, () => {
    console.log(`app listen on port http://localhost:${port}`)
})