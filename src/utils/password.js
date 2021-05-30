import bcrypt from 'bcryptjs';

/**
 *
 * @param {String} password - Password
 * @returns {String} - returns hashed password
 */
export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password, hashedPassword) =>
  bcrypt.compareSync(password, hashedPassword);
