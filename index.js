const express = require("express");
const path = require('path');


const x= require('dotenv').config();

const app = express();

const publicPath=path.resolve(__dirname,'public');
app.use(express.static(publicPath));

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket.js');

//ver carpeta socket
server.listen(process.env.PORT,(err)=>{ //antes era app.listene..
if(err) throw new Error (err);
console.log('server ok perfecto con Node.Js',process.env.PORT)

});







