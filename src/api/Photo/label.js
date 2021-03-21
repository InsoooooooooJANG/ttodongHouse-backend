import { conn } from "../../server";

exports.getLabelList = function(req, res){
    var query = 'CALL PS_GET_PHOTO_LABEL_LIST (' + req.body.photoid + ")";
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.createLabel = function(req, res){
    var query = 'CALL PM_CREATE_LABEL (' + req.body.labelname + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.unmapLabelToPhoto= function(req, res){
    var query = 'CALL PM_UNMAP_LABEL('+ req.body.photoid + ', ' + req.body.id + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.deleteLabel = function(req, res){
    var query = 'CALL PM_DELETE_LABEL_LIST (' + req.body.id + ');';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

