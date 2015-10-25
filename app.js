var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/public/';
var qs = require('./quickstart');

db.open(function(err, db) {
  if(!err) {
    console.log("We are connected");
  } else {
		console.log("Fuck.");
		}
});

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/test",function(req,res){
	res.sendFile(path + "test.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(80,function(){
  console.log("Live at Port 80");
});