const hasProfilePermission = (req, res, next) => {
  const { userId } = req;
  const { id } = req.params;

  if (+userId === +id) {
    return next();
  }
  return res.status(403).json({
    error: {
      message: 'You are not authorized to make changes to this profile',
    },
  });
};

export default hasProfilePermission;
