const { customAPIError } = require("../Errors/custom-error");
const {StatusCodes} = require("http-status-codes");

const errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof customAPIError){
        return res.status(err.statusCode).json({msg: err.message});
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: "Something went wrong"});
}

module.exports = errorHandlerMiddleware ;