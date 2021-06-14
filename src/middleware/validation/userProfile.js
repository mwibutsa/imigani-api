import updateUserProfile from '../../validationSchema/updateUserProfile';

export default (req, res, next) => {
  const { error } = updateUserProfile.validate(req.body);

  if (Object.values(req.body).length === 0) {
    return res.status(400).json({
      error: {
        message: 'Request body should not be empty',
      },
    });
  }

  if (!error) {
    return next();
  }

  return res.status(400).json({
    error: error.details,
  });
};
