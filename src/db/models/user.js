const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  /**
   * @author - Mwibutsa Floribert
   * @returns {null} - returns nothing
   */
  class user extends Model {
    /**
     *
     * @param {Object} models
     * @returns {Object} - returns Object
     */
    static associate(models) {
      return models;
    }
  }
  user.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user',
    }
  );
  return user;
};
