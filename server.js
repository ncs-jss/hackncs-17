var express = require("express");
var app = express();
var dbConfig = require('./config.js')()|| {
		dbName : 'ncsdb',
		dbUserName : 'root',
		dbPassword : 'root',
		host : 'localhost'
	}
	//console.log("Value of dbCOnfig is "+dbConfig.dbUserName);
	// body...
//var express = require('express');
//var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Sequelize = require("sequelize");
//var bodyParser  = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));


var sequelize = new Sequelize(dbConfig.dbName, dbConfig.dbUserName, dbConfig.dbPassword,

{
	host: dbConfig.host,
	//port : '3306',
	dialect: 'mysql',
	pool: {
		max: 100,
		min: 0,
		idle: 1000
	},

});
sequelize.authenticate().then(function(err) {
    console.log("connection established");
}).catch(function(err) {
    console.log("Unable to connect to database" + err);
});

sequelize.sync();
var Student = sequelize.import('./models/student.model.js');
var Event = sequelize.import('./models/event.model.js');
app.get('/contact', function(req, res) {
    res.sendFile('/contact.html', {
        root: './public'
    });
});
app.get('/clubs', function(req, res) {
    res.sendFile('/clubs.html', {
        root: './public'
    });
});
app.get('/contri', function(req, res) {
    res.sendFile('/contri.html', {
        root: './public'
    });
});


app.post('/studentRegister', function(req, res) {
    var email = req.body.email;
    var contactNo = req.body.number;
    Student.findOrCreate({
        where: {
            'email': email
        },
        defaults: {
            'contactNo': contactNo
        }
    }).spread(function(student, created) {
        console.log(student);
        console.log(student.get({
            plain: true
        }))
        console.log(created);
    })
    res.send("welcome home!");
});
app.get('/events', function(req, res) {
    res.sendFile('/events.html', {
        root: './public'
    });
});
app.get('/register', function(req, res) {
    res.sendFile('/register.html', {
        root: './public'
    });
});
app.get('/team', function(req, res) {
    res.sendFile('/team.html', {
        root: './public'
    });
})
app.get('/getevents', function(req, res) {
    Event.find().then(function(err, result) {
        res.send(result);
    });
});
app.post("/event", function(req, res) {
    var eventName = req.body.eventName;
    var displayStartTime = req.body.displayStartTime;
    var displayEndTime = req.body.displayEndTime;
    Event.findOrCreate({
        where: {
            'eventName': eventName
        },
        defaults: {
            'displayEndTime': displayEndTime,
            'displayStartTime': displayStartTime
        }
    }).spread(function(events, created) {
        //console.log(student);
        console.log(events.get({
            plain: true
        }))
        res.send("created!");
    })
})
app.get('/event', function(req, res) {
    Event.findAndCountAll({
        where: {
            $and: [{
                displayStartTime: {
                    $lt: new Date()
                }
            }, {
                displayEndTime: {
                    $gt: new Date()
                }
            }]
        }
    }).then(function(result) {
        console.log(result.count);
        res.send(result.rows);
    });
});
app.get('/', function(req, res) {
    console.log(__dirname + '/public');
    res.sendFile('/index.html', {
        root: __dirname + '\\public'
    });
})
app.listen(3000, function() {
    console.log("we are listening at port 3000\n type  http://localhost:3000/ in chrome");
});