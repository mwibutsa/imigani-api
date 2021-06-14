const asyncErrorHandler = (callBack) => async (req, res, next) => {
  try {
    await callBack(req, res, next);
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export default asyncErrorHandler;
