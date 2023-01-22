const http = require("http")
const express = require("express");
const { connect } = require("http2");
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server);

app.get("/",function(request,response){

    response.sendFile('./index.html',{root : __dirname})

})

// SOCKET İO
io.on('connection',function(socket){
    

    console.log("BİR KULLANIICI BAĞLANDI")

    socket.on('mesajvar', function(msg){
        io.emit('mesajvar',msg)
    })

    socket.on('disconnect', function(msg){
        console.log("Bir kullanıcı ayrıldı.")
    })

})

server.listen(3000,function(){
    console.log("server başlatıldı")
})


