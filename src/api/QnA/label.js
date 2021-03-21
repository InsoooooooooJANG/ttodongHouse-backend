import { conn } from "../../server";

exports.getLabelList = function(req, res){
    var query = 'CALL PS_GET_QNA_LABEL_LIST();';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.createQnaLabel = function(req, res){
    var query = 'CALL PM_CREATE_QNA_LABEL(' + req.body.labelname + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.deleteQnaLabel= function(req, res){
    var query = 'SELECT PM_DELETE_QNA_LABEL (' + req.body.id +');';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

