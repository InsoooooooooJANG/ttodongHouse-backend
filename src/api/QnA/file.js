import { conn } from "../../server";

exports.getFileList = function(req, res){
    var query = 'CALL PS_GET_FILE_ATTACH_LIST(' + req.body.qnaid+ ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.createAttachFile = function(req, res){
    var query = 'SELECT PM_CREATE_ATTACH_FILE (' + req.body.filename +','+req.body.fileurl+','+req.body.location + ',' + req.body.userid + ',' + req.body.qnaid + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.deleteAttachFile= function(req, res){
    var query = 'SELECT PM_DELETE_ATTACH_FILE (' + req.body.id + ');';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

