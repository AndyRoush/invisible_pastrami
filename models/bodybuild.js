module.exports = function(sequelize, DataTypes) {
    var userLogin = sequelize.define("userLogin", {
      userName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
          type: DataTypes.TEXT,
          allowNull: false
      }
    });
    return userLogin;
  };