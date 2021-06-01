import { Model } from 'sequelize';
import { hashPassword } from '../../utils/password';

module.exports = (sequelize, DataTypes) => {
  /**
   * @author - Mwibutsa Floribert
   * @returns {null} - returns nothing
   */
  class User extends Model {
    /**
     * @param {Object} models
     * @returns {Object} - returns Object
     */
    static associate(models) {
      return models;
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      middleName: {
        type: DataTypes.STRING,
      },
      pictureURL: { type: DataTypes.STRING, defaultValue: '' },
      password: {
        type: DataTypes.STRING,
        validate: {
          isRegisteringWithEmail(value) {
            if (this.email.length === 0 && value.length === 0) {
              throw new Error('Please provide a phone number or email');
            }
          },
          validation() {
            if (this.password.length >= 8) {
              return hashPassword(this.password);
            }
            throw new Error('Password should be at least 8 characters long');
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      providerId: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          validation() {
            if (this.provider?.length > 0 && this.providerId.length === 0) {
              throw new Error('Provider ID can not be empty');
            }
          },
        },
      },
      provider: {
        type: DataTypes.STRING,
        validate: {
          validation() {
            if (this.providerId.length > 0 && this.provider.length === 0) {
              throw new Error('Provider can not be empty');
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  User.createUser = (userData) => User.create(userData);
  User.getUserByProviderId = (id, provider) =>
    User.findOne({
      where: { providerId: id, provider },
    });

  return User;
};
