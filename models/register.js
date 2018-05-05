module.exports = function(sequelize, DataTypes) {
    var register = sequelize.define("register", {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      trainer: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
    });
    return register;
  };