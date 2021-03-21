import { conn } from "../../server";

exports.getList = function(req, res){
    var query = 'CALL PS_GET_NOTICE(' + req.body.userid +  ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.createNotice = function(req, res){
    var query = 'SELECT PM_INSERT_NOTICE (' + req.body.desc +','+req.body.link+','+req.body.check + ', ' + req.body.userid + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.updateNotice= function(req, res){
    var query = 'SELECT PM_UPDATE_NOTICE('+ req.body.id + ', '  + req.body.check + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
