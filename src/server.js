var express=require('express');
var bodyParser = require('../node_modules/body-parser');
var http= require('http');
var db_config = require(__dirname + '/dbconnect.js');
var conn = db_config.init();
var app = express();

var server=http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

db_config.connect(conn);

conn.query('use ttodonghouse_dev;', (error, rows, fields)=>{
    if(error) console.log(error);
});

var userApi = require('./api/User/user');
app.get('/api/userlist', userApi.getUserList);
app.get('/api/getUserInfo', userApi.getUser);
app.post('/api/setUserInfo', userApi.setUser);
app.put('/api/updateUserInfo', userApi.updateUser);
app.delete('/api/deleteUser', userApi.deleteUser);

var reservApi = require('./api/Reservation/reservation');


app.listen(3000, ()=>{
    console.log('example starts');
});

export {conn};