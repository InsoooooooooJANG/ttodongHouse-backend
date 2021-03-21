import { conn } from "../../server";

exports.getCommentList = function(req, res){
    var query = 'CALL PS_GET_QNA_COMMENT(' + req.body.id + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.createQnaComment = function(req, res){
    var query = 'SELECT PM_CREATE_QNA_COMMENT (' + req.body.contents +','+req.body.id+','+req.body.userid + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.deleteQna= function(req, res){
    var query = 'SELECT PM_DELETE_QNA_COMMENT (' + req.body.id +',' + req.body.userid+ ');';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

