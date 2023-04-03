const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class key extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  key.init(
    {
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      key: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "key",
      timestamps: false,
    }
  );
  return key;
};
