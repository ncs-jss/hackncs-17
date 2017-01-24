// model for users

module.exports = function( sequelize, dataTypes ) {
  return sequelize.define( 'User', {
    id : {type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: { type: dataTypes.STRING, allowNull: false },
    signInCount: { type: dataTypes.INTEGER },
    currentSignInAt:  { type: dataTypes.DATE },
    lastSignInAt: { type: dataTypes.DATE },
    currentSignInIP: { type: dataTypes.DATE },
    lastSignInIP: { type: dataTypes.DATE },
    name: { type: dataTypes.STRING },
    club:  { type: dataTypes.STRING },
    year:  { type: dataTypes.INTEGER },
    linkedIn:  { type: dataTypes.STRING },
    github:  { type: dataTypes.STRING },
    admissionNo:  { type: dataTypes.STRING },
    contactNo:  { type: dataTypes.INTEGER },

  });
};
