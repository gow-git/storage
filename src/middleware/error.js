exports.errorHandler404 = (req, res, next) => {
  const err = new Error(`route '${req.path}' Not found`);
  err.status = 404;
  next(err);
};

exports.errorHandler500 = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const error =
    req.app.get("env") === "development"
      ? {
          status: statusCode,
          message: err.message,
          stack: err.stack,
        }
      : {
          status: statusCode,
          message: "Server Error",
        };

  res.status(statusCode).json(error);
};
