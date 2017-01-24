//user roels model

module.exports = function( sequelize, dataTypes ) {
  return sequelize.define( 'UserRoles', {
    rolesId: { type: dataTypes.INTEGER},
    usersId: { type: dataTypes.INTEGER},
  });
};
