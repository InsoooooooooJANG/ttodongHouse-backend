var express=require('express');
var http= require('http');
var app = express();
var server=http.createServer(app);

app.get('/', function(req, res){
    res.send('root page');
})

app.get('/test', function(req, res){
    res.send('test page');
});

app.listen(3000, ()=>{
    console.log('example starts');
});