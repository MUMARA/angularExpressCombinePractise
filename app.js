var express = require('express')
    ,http = require("http")
    , cors = require('cors')
    , app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());
app.set('port',3000);
app.get("/users",function (req,res) {
  
res.send({ "msg": "data Send Successfully"});
})
    http.createServer(app).listen(app.get('port'),function(){
       console.log('expres server'+app.get('port'));
    });