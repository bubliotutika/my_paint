document.addEventListener('DOMContentLoaded', function() {
    const homeSocket = io('/home');
    const roomList = document.getElementById('room-list');

    document.getElementById('create-room-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const roomName = document.getElementById('room-name').value;
        if (roomName.length > 0)
            homeSocket.emit('create-room', roomName);
    });

    homeSocket.on('new-room', function(room) {
        roomList.insertAdjacentHTML('beforeend', `
            <div class="row d-flex justify-content-center offset-top-1">
                <p><h6>Players: ${room.players.length}/${room.maxRoomPlayer}</h6></p>
                <p><h6>Room: </h6>${room.roomName}</p>
                <button id="join-room-${room.id}" class="btn btn-outline-secondary mb-2">Join</button>
            </div>
        `);
        document.getElementById(`join-room-${room.id}`).addEventListener('click', function(e) {
            e.preventDefault();
            window.location.assign(`http://localhost:3000/room/${room.id}`);
        });
    });

    homeSocket.on('room-list', function(rooms) {
        if (rooms.length > 0) {
            for (let i = 0; i < rooms.length; ++i) {
                const room = rooms[i];
                roomList.insertAdjacentHTML('beforeend', `
                    <div class="row d-flex justify-content-center offset-top-1">
                        <p><h6>Players: ${room.players.length}/${room.maxRoomPlayer}</h6></p>
                        <p><h6>Room: </h6>${room.roomName}</p>
                        <button id="join-room-${room.id}" class="btn btn-outline-secondary mb-2">Join</button>
                    </div>
                `);
                document.getElementById(`join-room-${room.id}`).addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.assign(`http://localhost:3000/room/${room.id}`);
                });
            }
        }
    });
});