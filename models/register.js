module.exports = function(sequelize, DataTypes) {
    var register = sequelize.define("register", {
      userName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      trainer: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
    });
    return register;
  };