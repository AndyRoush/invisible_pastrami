module.exports = function(sequelize, DataTypes) {
    var survey = sequelize.define("survey", {
      goal: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      diet: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      exercisePref: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      addNotes: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
          type: DataTypes.TEXT
      }
    });
    return survey;
  };