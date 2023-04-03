const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  password.init(
    {
      user_id: DataTypes.UUID,
      domain: DataTypes.STRING,
      hashed_password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "password",
      timestamps: false,
    }
  );
  return password;
};