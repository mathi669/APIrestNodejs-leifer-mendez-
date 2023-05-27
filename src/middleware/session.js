const { handleHttpError } = require("../shared/utils/handleErrors");
const { verifyToken } = require("../shared/utils/handleJwt");
const {usersModel} = require('../models')
 
const authMiddleware = async (req, res, next) => {
    try {

        if(!req.headers.authorization){
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token)

        if(!dataToken._id){
            handleHttpError(res, "ERROR_ID_TOKEN", 401)
            return
        }

        const userToken = await usersModel.findById(dataToken._id)
        req.user = userToken

        next()

        
    } catch (e) {
        handleHttpError(res, "NOT_SESSION", 401)
    }
}

module.exports = authMiddleware