// registration model
module.exports = function(sequelize, dataTypes) {
    return sequelize.define('registerations', {
        
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
        
    },{
        underscored: true,
    });
};