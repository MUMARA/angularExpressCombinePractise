var express = require('express')
    , cors = require('cors')
    , app = express();

app.use(cors());
app.get("/users", function (req, res) {
 res.sendFile(__dirname + '/client/index.html');
}).listen(3000);


