const errorHandler = (err, req, res, next) => {
  console.error(`[${req.method}] ${req.orignalUrl} ==>`, err);

  return res
    .status(500)
    .json({ success: false, message: "Internal Server Error..." });
};

export const asyncHandler = (func) => {
  return (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
};

export default errorHandler;
