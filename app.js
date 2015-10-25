var mongouri = 'mongodb://localhost/users';
var db = require('mongoose').connect(mongouri),
    model = require('./app/models/user.server.model'),
	control = require('./app/controllers/users.server.controller');

var path = __dirname + '/public/';
var qs = require('./quickstart');
var express = require("express");
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');


var port = 1024;


app.use(bodyParser.urlencoded({
	extended:true
}));

app.use(bodyParser.json());

app.use(express.static('./public'));
//app.use(
/*var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('exampleDb', server);
*/
/*db.open(function(err, db) {
  if(!err) {
    console.log("We are connected");
  } else {
		console.log("Fuck.");
		}
});*/

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/test",function(req,res){
	qs.fs.readfile();
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(port,function(){
  console.log("Live at Port 1024");
});

app.route('/users').post(control.create);
