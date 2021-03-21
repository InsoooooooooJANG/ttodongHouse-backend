import { conn } from "../../server";

exports.getList = function(req, res){
    var query = 'CALL PS_GET_PHOTO_LIST';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.createPhoto = function(req, res){
    var query = 'CALL PM_CREATE_PHOTO (' + req.body.photourl +','+req.body.desc+','+req.body.location + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.updatePhoto= function(req, res){
    var query = 'SELECT PM_UPDATE_PHOTO('+ req.body.id + ', ' + req.body.photourl +','+req.body.desc+','+req.body.location + ')';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}
exports.deletePhoto = function(req, res){
    var query = 'CALL PM_DELETE_PHOTO (' + req.body.id + ');';
    conn.query(query, (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

