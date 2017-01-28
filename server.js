var express = require("express");
var app = express();
var dbConfig = require('./config.js')() ;

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
var sequelize = new Sequelize(dbConfig.dbName, dbConfig.dbUserName, dbConfig.dbPassword, {
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

Student.belongsToMany(Event, {through : 'registerations'});
Event.belongsToMany(Student, {through : 'registerations'});

//Routes for rendering files.

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




//Functional Routes.


// accepting  an object  {email : **,number: ** , year :  ** , name: ** ,admissionNumber : **};
app.post('/api/studentRegister', function(req, res) {
    //console.log("req.body.email is "  +req.body.email);
    var email = req.body.email;
    var contactNo = req.body.number;
    var year = req.body.year;
    var name = req.body.name;
    var admissionNumber =req.body.admissionNumber;
    var event_id = req.body.event_id;
    //console.log(req.body);
    Student.findOrCreate({
        where: {
            'email': email
        },
        defaults: {
            'contact_no': contactNo,
            'year' : year,
            'name' : name,
            'admission_no' : admissionNumber
        }
    }).spread(function(student, created) {
        //console.log(student);
        student.addEvent(event_id);
        console.log("added an entry in registerations");

        console.log(student.get({
            plain: true
        }))
        console.log("Created At student Table " +created);
    })
        res.send("studentCreaded is ");
});




//Used to get all the routes.
app.get('/api/getevents', function(req, res) {
    Event.all().then(events => res.status(200).send(events))
    .catch(error => {res.status(400).send(error); console.log(error)});

});




// app.post("/event", function(req, res) {
//     var eventName = req.body.eventName;
//     var displayStartTime = req.body.displayStartTime;
//     var displayEndTime = req.body.displayEndTime;
//     Event.findOrCreate({
//         where: {
//             'eventName': eventName
//         },
//         defaults: {
//             'displayEndTime': displayEndTime,
//             'displayStartTime': displayStartTime
//         }
//     }).spread(function(events, created) {
//         //console.log(student);
//         console.log(events.get({
//             plain: true
//         }))
//         res.send("created!");
//     })
// })



// to get the events whose poster are to be live @current time.

app.get('/api/upcomingEvent', function(req, res) {
    Event.findOne({order: '"start_time" DESC' 
        

    }).then(function(result) {
        console.log(result);
        res.send(result);
    });
});



app.get('/', function(req, res) {
    console.log(__dirname + '/public');
    res.sendFile('/index.html', {
        root: __dirname + '\\public'
    });
});


app.listen(3000,function() {
    console.log("we are listening at port 3000\n type  http://localhost:3000/ in chrome");
});