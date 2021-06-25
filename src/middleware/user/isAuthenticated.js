import { verifyToken } from '../../utils/jwt';

const isAuthenticated = (req, res, next) => {
  try {
    const decodedToken = verifyToken(req);
    const { userId } = decodedToken;
    req.userId = userId;
    return next();
  } catch (error) {
    return res.status(401).json({
      error: {
        message: 'Please log in first',
      },
    });
  }
};

export default isAuthenticated;
