module.exports = app => {
//Upload image
var mongoose = require('mongoose')


const multer = require('multer');
const path = require('path')



app.post('/api/upload/:id',
(req,res) => {

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/var/www/html/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, req.params.id+'.png');
    }
 });
 var upload = multer({ storage : storage}).any();
 upload(req,res,function(err) {
    if(err) {
        console.log(err);
        return res.end("Error uploading file.");
    } else {

       res.end("sucesso");
    }
});
});
app.post('/api/upload/produtos/:id:url',
(req,res) => {

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/var/www/html/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, req.params.id+req.params.url+'.png');
    }
 });
 var upload = multer({ storage : storage}).any();
 upload(req,res,function(err) {
    if(err) {
        console.log(err);
        return res.end("Error uploading file.");
    } else {

       res.end("sucesso");
    }
});
});

//Deletar arquivo

const fs= require('fs')

app.delete('/api/upload/del/:id', (req,res)=>{
    fs.unlinkSync("/var/www/html/uploads"+req.params.id+".png")
    res.send("Arquivo deletado").catch(err => res.send(err))}
)

}