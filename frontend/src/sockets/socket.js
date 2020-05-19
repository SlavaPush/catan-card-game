

const setupSocket = (dispatch, data) => {
    const socket = new WebSocket('ws://localhost:3001');

     socket.onopen = () => { //@saga_step_2
      socket.send(JSON.stringify({
            data,
        }))
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch(data.type) {
          case 'TEST_SERVER_TO_CLIENT':  //@saga_step_7
            console.log(data,'TEST_SERVER_TO_CLIENT')
            break;
      }
    }

    return socket;
};

export default setupSocket;
