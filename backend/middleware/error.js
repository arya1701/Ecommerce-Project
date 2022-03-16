const ErrorHandler = require('../utils/errorhandler');

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";


    // wrong mongodb Id error
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message,400);
    }

    // mongooose duplicate key error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message,400);
    }

    // wrong JWT error
    if(err.name === "JsonWebTokenError"){
        const message = `Json webtoken is invalid, Try again!`;
        err = new ErrorHandler(message,400);
    }

    // Jwt expired error
    if(err.name === "TokenExpiredError"){
        const message = `Json Web token is expired, try again`;
        err = new ErrorHandler(message,400);
    }


    res.status(err.statusCode).json({
        success:false,
        message:err.message,
        // err:err.stack // to more about the error
    });
};