// registration model
module.exports = function(sequelize, dataTypes) {
    return sequelize.define('registrations', {
        underscored: true,
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        studentsId: {
            type: dataTypes.INTEGER
        },
        eventsId: {
            type: dataTypes.INTEGER
        },
    });
};