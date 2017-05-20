module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    FoodName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FoodDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FoodCalorieGain: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  console.log("food model is working");
  return Food;
};

