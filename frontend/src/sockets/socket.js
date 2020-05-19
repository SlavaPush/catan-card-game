
const setupsocket = (data) => {
    const socket = new WebSocket('ws://localhost:3001');

    socket.onopen = () => {
        socket.send(JSON.stringify({
            data
        }))
    }
};

export default setupsocket;
