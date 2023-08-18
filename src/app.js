const express = require('express')
const cors = require('cors')
const morganBody = require('morgan-body')
const swaggerUI = require('swagger-ui-express')
// const loggerStream = require('./shared/utils/handleLogger')
require('dotenv').config()
const dbConnect = require('../src/shared/config/mongo')
const openApiConfig = require('./docs/swagger')
const app = express()

const subscribe = require('./service/pubsub')

app.use(cors())
app.use(express.json())
app.use(express.static("../src/shared/storage"))
app.use(function (req, res, next){
    subscribe()
    next()
})




// morganBody(app,{
//     noColors:true,
//     stream: loggerStream,
//     skip: function(req,res){
//         return res.statusCode < 400
//     }
// })

const port = process.env.PORT
/**
 * Definir ruta de documentacion
 */
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfig))

app.use("/api", require("../src/routes"))

app.listen(port, () => {
    console.log(`app listen on port http://localhost:${port}`)
})

dbConnect()