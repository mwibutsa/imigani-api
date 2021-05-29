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
        validate: {
          len: [1, 50],
          notEmpty: true,
          isAlpha: {
            args: [true],
            msg: 'First name should only container letters',
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          isAlpha: {
            msg: 'Last name should only container letters',
          },
        },
      },
      middleName: {
        type: DataTypes.STRING,
        validate: {
          isAlpha: {
            msg: 'Middle name should only container letters',
          },
        },
      },
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
        validate: {
          isEmail: {
            msg: 'Please provide a valid email address',
          },
          notEmpty: false,
          isRegisteringWithPhone(value) {
            if (
              (!this.phoneNumber || this.phoneNumber.length === 0) &&
              value.length === 0
            ) {
              throw new Error(
                'Please provide an email address or a phone number'
              );
            }
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isNumeric: {
            msg: 'Please provide a valid phone number',
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmpty: {
            msg: 'Username can not be empty',
          },
          isAlphanumeric: {
            msg: 'Please provide a valid username',
          },
          len: [5, 30],
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
