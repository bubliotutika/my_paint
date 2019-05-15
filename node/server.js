const fs = require('fs');
const express = require('express')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const F = require('./function/function');

app.set('view engine', 'ejs');
app.use(express.static(__dirname.replace('/node', '')));

app.get('/home', function(req, res) {
    res.render('home')
});

app.get('/room/:id', function(req, res) {
    res.render('room');
});


const ROOMS = [];
const HOME = io.of('/home');
const ROOM = io.of('/room');
const maxRoomPlayer = 4;
let userAlreadyInRoom = [];

HOME.on('connection', function(socket) {

    HOME.connected[socket.id].emit('room-list', ROOMS.map(
        (room, id) => ({ id, ...room })
    ));

    socket.on('create-room', function(roomName) {
        const newRoom = {
            roomName,
            players: [],
            maxRoomPlayer
        }
        ROOMS.push(newRoom);
        const id = ROOMS.findIndex(function(roomName) {
            return roomName === newRoom;
        });
        HOME.emit('new-room', {
            id,
            ...newRoom,
        });
    });

    socket.on('disconnect', function() {

    });
});


ROOM.on('connection', function(socket) {
    socket.on('update workspace', function(data) {
        for (let i = 0; i < userAlreadyInRoom.length; ++i) {
            if (userAlreadyInRoom !== socket.client.id)
            socket.to(`ROOM-${data.roomId}`).emit('update workspace', data.src);
        }
    });

    socket.on('join-room', function(roomId) {
        if (!ROOMS[roomId] || ROOMS[roomId].players.length + 1 > maxRoomPlayer ) {
            ROOM.connected[socket.id].emit('redirect', 'http://localhost:3000/home');
        } else {
            socket.join(`ROOM-${roomId}`);
            ROOMS[roomId].players.push(socket.client.id);
            userAlreadyInRoom.push(socket.client.id);
            
        }
    });

    socket.on('disconnect', function() {
        ROOMS.forEach(elt => {
            if (elt.players.includes(socket.client.id))
                elt.players = F.removeArrayValue(elt.players, socket.client.id);
                userAlreadyInRoom = F.removeArrayValue(userAlreadyInRoom, socket.client.id);
        });
    });
});

http.listen(3000);