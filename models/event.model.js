//model for events

module.exports = function( sequelize, dataTypes) {
  return sequelize.define( 'events', {
    id: { type: dataTypes.INTEGER , autoIncrement:true, primaryKey: true },
    name : { type : dataTypes.STRING ,allowNull : false },
    start_time : {type : dataTypes.DATE  },
    end_time: {type : dataTypes.DATE },
    display_start_time : {type : dataTypes.DATE },
    display_end_time : {type : dataTypes.DATE },
    description : { type : dataTypes.TEXT },
    contact_info : {type : dataTypes.STRING },
    venue : { type : dataTypes.STRING },
    poster_file_name : { type : dataTypes.STRING},
    poster_content_type : { type : dataTypes.STRING},
    poster_updated_at : {type : dataTypes.DATE}
  });
}
