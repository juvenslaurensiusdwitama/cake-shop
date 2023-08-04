"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cake extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cake.belongsTo(models.Customer);
      Cake.belongsTo(models.Type);
    }
  }
  Cake.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      desc: DataTypes.STRING,
      price: DataTypes.INTEGER,
      TypeId: DataTypes.INTEGER,
      CustomerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cake",
    }
  );
  return Cake;
};
