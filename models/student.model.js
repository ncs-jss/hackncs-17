//models for student using DataTypes
module.exports = function  (sequelize, DataTypes) {
	return  sequelize.define('students',{
			id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
			email : { type : DataTypes.STRING , allowNull : false},
			name : { type : DataTypes.STRING },
			year : { type : DataTypes.INTEGER,},
			contactNo : { type : DataTypes.STRING,allowNull : false},
			admissionNo : { type : DataTypes.STRING}
	});
}
// }
// {

//   // don't forget to enable timestamps!
//   timestamps: true,
//   // I want updatedAt to actually be called updateTimestamp
//   updatedAt: 'updateTimestamp',
//   createdAt: ''
