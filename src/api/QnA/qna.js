import { conn } from "../../server";

exports.getList = function(req, res){
    var query = 'CALL PS_GET_QNA_LIST(' + req.body.title + ',' + req.body.label + ',' + req.body.contents + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.getQnaDetail = function (req, res){
    var query = 'CALL PS_GET_QNA_DETAIL(' + req.body.id + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.createQna = function(req, res){
    var query = 'SELECT PM_CREATE_QNA (' + req.body.userid +','+req.body.labelid+','+req.body.title + ', ' + req.body.contents + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.updateQna= function(req, res){
    var query = 'SELECT PM_UPDATE_QNA('+ req.body.id + ', '  + req.body.userid + ', ' + req.body.labelid +','+req.body.title+','+req.body.contents + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.deleteQna= function(req, res){
    var query = 'CALL PM_DELETE_QNA (' + req.body.id +',' + req.body.userid+ ');';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

