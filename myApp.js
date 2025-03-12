const express = require('express');
const helmet = require('helmet');
const app = express();
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}))

//app.use(helmet.xssFilter())


app.use(express.urlencoded({extended: true}));
app.post('/test', (req, res) =>{
    res.send('Input recived: ' + req.body.input);
});






























module.exports = app;
const api = require('./server.js');
const res = require('express/lib/response.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`😊Useful programmer Info security App started on port ${port}`);
});
