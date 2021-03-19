var express=require('express');
var http= require('http');
var db_config = require(__dirname + '/dbconnect.js');
var conn = db_config.init();
var app = express();
var server=http.createServer(app);

db_config.connect(conn);

app.get('/', function(req, res){
    res.send('root page');

    conn.query('use ttodonghouse_dev;', (error, rows, fields)=>{
        if(error) console.log(error);
        console.log('result ', rows);
    });

    conn.query('show tables;', (error, rows, fields)=>{
        if(error) console.log(error);
        console.log('result ', rows);
    });
});

app.get('/test', function(req, res){
    res.send('test page');
});

app.listen(3000, ()=>{
    console.log('example starts');
});