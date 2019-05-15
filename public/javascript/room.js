const roomSocket = io('/room');
const pathUrl = window.location.pathname.split('/');
const roomId = pathUrl[pathUrl.length-1];

roomSocket.emit('join-room', roomId);

roomSocket.on('redirect', function(url) {
    window.location.assign(url);
});
