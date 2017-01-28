//models for student using DataTypes
module.exports = function  (sequelize, DataTypes) {
	return  sequelize.define('students',{
			id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
			email : { type : DataTypes.STRING , allowNull : false},
			name : { type : DataTypes.STRING },
			year : { type : DataTypes.INTEGER,},
			contact_no : { type : DataTypes.STRING,allowNull : false},
			admission_no : { type : DataTypes.STRING}
	},{
		underscored :true
	});
}
// }
// {


