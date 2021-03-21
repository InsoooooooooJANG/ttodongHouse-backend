import { conn } from "../../server";

exports.getList = function(req, res){
    var query = 'CALL PS_GET_RESERVATION ( ' + req.body.status + ');';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.getMyReserv = function(req, res){
    var query = 'CALL PS_GET_MY_RESERVATION(' + req.body.userid + ')';
    conn.query(param, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.createReserv = function(req, res){
    var query = 'SELECT PM_CREATE_RESERVATION (' + req.body.userid +','+req.body.reservdate+','+req.body.comment+','+req.body.confirm + ',' +req.body.confirmdate + ','+ req.body.done + ',' + req.body.reply + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.updateReserv = function(req, res){
    var query = 'SELECT PM_UPDATE_RESERVATION ('+ req.body.id + ', '+ req.body.userid +','+req.body.reservdate+','+req.body.comment+','+req.body.confirm + ',' +req.body.confirmdate + ','+ req.body.done + ',' + req.body.reply + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.deleteReserv = function(req, res){
    var query = 'SELECT PM_DELETE_RESERVATION (' + req.body.id + ');';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

