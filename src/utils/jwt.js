import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = (user) => {
  const { id, providerId, provider } = user;
  const token = jwt.sign(
    { userId: id, provider, providerId },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '30 days' }
  );
  return token;
};

export const verifyToken = (req) =>
  jwt.verify(req.header('x-auth-token'), process.env.JWT_SECRET_KEY);
