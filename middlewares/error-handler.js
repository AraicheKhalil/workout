const {StatusCodes} = require('http-status-codes')


const errorHandler_Middleware = (err,req,res,next) => {

    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later',
    }

    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors)
          .map((item) => item.message)
          .join(',')
        customError.statusCode = StatusCodes.BAD_REQUEST
    }

    if (err.code && err.code  === 11000){
        customError.msg = "This workout title is already use please try another one"
        customError.statusCode = StatusCodes.BAD_REQUEST
    }

    if (err.name === 'CastError'){
        customError.msg = "this ObjectId is not valid, Please try another one"
        customError.statusCode = StatusCodes.NOT_FOUND
    }
    
    return res.status(customError.statusCode).json({ msg: customError.msg })

}

module.exports = errorHandler_Middleware



    
        // if (err.name === 'CastError'){
        //     customError.msg = "this ObjectId is not valid, Please try another one"
        // }
        
        // if (err.code === 11000){
        //     return res.status(StatusCodes.BAD_REQUEST).json({middleware  : true ,msg : customError.msg})
        // }