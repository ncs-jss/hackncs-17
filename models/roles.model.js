//user roles model

module.exports = function( sequelize, dataTypes ) {
  return sequelize.define('Roles', {
    id : {type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: dataTypes.STRING },
    resourceType: { type: dataTypes.STRING },
    resourceId: {type: dataTypes.INTEGER },
  });
};
