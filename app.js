var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/routes.js');
var ejs = require('ejs');
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(session({secret: "secret", resave: true, saveUninitialized: false}));

app.set('view engine', 'ejs');

app.get('/', routes.loginpageHandler);
app.get('/toLanding', routes.landingpageHandler);
app.get('/toCity', routes.cityPageHandler);


var port= 3000;
app.listen(port, function(){
    console.log("Express server started listnening to port no:" + port);
});


