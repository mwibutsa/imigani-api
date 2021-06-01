import { generateToken } from '../utils/jwt';

const authenticateUser = (req, res) => {
  const { user } = req;

  res.status(200).json({
    token: generateToken(user),
  });
};

export default authenticateUser;
