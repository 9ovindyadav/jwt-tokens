const {StatusCodes} = require("http-status-codes");

class customAPIError extends Error{
    constructor(message){
        super(message)

    }
}

class badRequestError extends customAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST ;
    }
}

class unAuthorizedError extends customAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED ;
    }
}

module.exports = {
    customAPIError,
    unAuthorizedError,
    badRequestError
} ;