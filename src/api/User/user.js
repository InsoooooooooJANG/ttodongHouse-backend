import { conn } from "../../server";

exports.getUserList = function(req, res){
    conn.query('CALL PS_GET_USER_LIST ();', (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.getUser= function(req, res){
    conn.query('CALL PS_GET_USER_INFO (' + req.body.id + ');', (error, rows, fields)=>{
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.setUser = function (req, res){
    var query = 'select pm_insert_user (' + req.body.nickname + ',' + req.body.kakaoid + ',' + req.body.email + ',' + req.body.priv + ', ' + req.body.point +',' +req.body.reservcount + ');';
    conn.query(query, (error, rows, fields) => {
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.updateUser = function(req, res) {
    var query = 'select pm_update_user(' + req.body.id + ', ' + req.body.nickname + ', ' + req.body.email + ', ' + req.body.priv + ', ' + req.body.point + ', ' + req.body.reservcount +');';
    conn.query(query, (error, rows, fields) => {
        if(error) console.log(error);
        res.json(rows);
    });
}

exports.deleteUser = function(req, res) {
    var query = 'select pm_delete_user(' + req.body.id + ');';
    conn.query(query, (error, rows, fields) => {
        if(error) console.log(error);
        res.json(rows);
    });
}

