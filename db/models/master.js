const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  master.init(
    {
      user_id: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "master",
    }
  );
  return master;
};
