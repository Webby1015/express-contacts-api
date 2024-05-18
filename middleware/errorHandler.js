const constants = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({ 
        tilte:"Validation Error",
        message: err.message,
        stackTrace: err.stack });
      break;
    case constants.UNAUTHORISED:
      res.json({ 
        tilte:"Unauthorised Error",
        message: err.message,
        stackTrace: err.stack });
      break;
    case constants.FORBIDDEN:
      res.json({ 
        tilte:"Forbidden Error",
        message: err.message,
        stackTrace: err.stack });
      break;
    case constants.NOT_FOUND:
      res.json({ 
        tilte:"Resource Not Found",
        message: err.message,
        stackTrace: err.stack });
      break;
    case constants.SERVER_ERROR:
      res.json({  
        tilte:"	Internal Server Error",
        message: err.message,
        stackTrace: err.stack });
      break;
    default:
      res.json({
        message: "No Error",
      });
      break;
  }
  res.json({ 
        tilte:"Validation Error",
        message: err.message,
        stackTrace: err.stack });
};

module.exports = errorHandler;
