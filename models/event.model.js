//model for events

module.exports = function( sequelize, dataTypes) {
  return sequelize.define( 'Event', {
    id: { type: dataTypes.INTEGER , autoIncrement:true, primaryKey: true },
    eventName : { type : dataTypes.STRING ,allowNull : false },
    startTime : {type : dataTypes.DATE  },
    endTime: {type : dataTypes.DATE },
    displayStartTime : {type : dataTypes.DATE },
    displayEndTime : {type : dataTypes.DATE },
    description : { type : dataTypes.TEXT },
    contactInfo : {type : dataTypes.STRING },
    venue : { type : dataTypes.STRING }
  });
}
