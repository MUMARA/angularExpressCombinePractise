var express = require("express");
var http = require("http");
var bodyParser = require("body-parser")
var app = express();
app.use(express.bodyParser());
//app.use(cors());
app.set('port',3000);
app.get("/users",function (req,res) {
  
res.send({ "msg": "data Send Successfully"});
})
    http.createServer(app).listen(app.get('port'),function(){
       console.log('expres server'+app.get('port'));
    });