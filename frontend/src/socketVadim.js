 const socketVadim = new WebSocket('ws://localhost:4000/test');

export {socketVadim}

socketVadim.onopen = () => {console.log('socket open')}
