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
app.get('/api/getReservList', reservApi.getList);
app.get('/api/getMyReserv', reservApi.getMyReserv);
app.post('/api/createReserv', reservApi.createReserv);
app.put('/api/updateReserv', reservApi.updateReserv);
app.delete('/api/deleteReserv', reservApi.deleteReserv);

var photoApi = require('./api/Photo/photo');
app.get('/api/getPhotoList', photoApi.getList);
app.post('/api/createPhoto', photoApi.createPhoto);
app.put('/api/updatePhoto', photoApi.updatePhoto);
app.delete('/api/deletePhoto', photoApi.deletePhoto);

var qnaApi = require('./api/QnA/qna');
app.get('/api/getQnaList',qnaApi.getList);
app.get('/api/getQnaDetail', qnaApi.getQnaDetail);
app.post('/api/createQna', qnaApi.createQna);
app.put('/api/updateQna', qnaApi.updateQna);
app.delete('/api/deleteQna', qnaApi.deleteQna);

var qnaCommApi = require('./api/QnA/comment');
app.get('/api/getCommentList', qnaCommApi.getCommentList);
app.post('/api/createQnaComment', qnaCommApi.createQnaComment);
app.delete('/api/deleteQna', qnaCommApi.deleteQna);

var noticeApi = require('./api/Notice/Notice');
app.get('/api/getNoticeList', noticeApi.getList);
app.put('/api/updateNotice', noticeApi.updateNotice);
app.post('/api/createNotice', noticeApi.createNotice);

var qnaLabelApi = require('./api/QnA/label');
app.get('/api/getQnaLabelList', qnaLabelApi.getLabelList);
app.post('/api/createQnaLabel', qnaLabelApi.createQnaLabel);
app.delete('/api/deleteQnaLabel', qnaLabelApi.deleteQnaLabel);

var photoLabelApi = require('./api/Photo/label');
app.get('/api/getLabelList', photoLabelApi.getLabelList);
app.put('/api/unmapLabelToPhoto', photoLabelApi.unmapLabelToPhoto);
app.delete('/api/deleteLabel', photoLabelApi.deleteLabel);
app.post('/api/createLabel', photoLabelApi.createLabel);

var attachFileApi = require('./api/QnA/file');
app.get('./api/getFileList', attachFileApi.getFileList);
app.post('./api/createAttachFile', attachFileApi.createAttachFile);
app.delete('./api/deleteAttachFile', attachFileApi.deleteAttachFile);

app.listen(3000, ()=>{
    console.log('example starts');
});

export {conn};