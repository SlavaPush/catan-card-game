const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session)
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');
const WebSocket = require('ws');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({
  server
});

// send data to clients
const broadcast = (data, ws) => {
  wss.clients.forEach(client => {
      // send for everyone except author
      if (client.readyState === WebSocket.OPEN && client !== ws) {
          client.send(JSON.stringify(data))
      }
  })
};

const state = {

};

wss.on('connection', ws => {
  console.log('connect new user'); //@saga_step_3

  ws.on('message', (message) => { //@saga_step_4

    const data = JSON.parse(message);
    console.log(data, '<><><><><><><><');
    switch (data.type) {
      case 'TEST':  //@saga_step_5
        console.log('TEST_SERVER');
        broadcast({  //@saga_step_6
          type:'TEST_SERVER_TO_CLIENT',
          state: data.state
        }, ws)
        break;
        case 'SAGA_STATE_TRANSFER':
          console.log('SAGA_STATE_TRANSFERSAGA_STATE_TRANSFERSAGA_STATE_TRANSFER');
          break;
          default:
            break;
    }

  })
  ws.on('close', () => {
    console.log('user disconnect');
  })
  ws.on('error', (error) => {
    console.log(error);

  })
})

const { PORT, MONGODB_URI } = process.env;

const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');


const store = new MongoStore({
  collection: 'sessions',
  uri: MONGODB_URI
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: false,
  store,
  cookie: {
    expires: 60 * 60 * 1000
  }
}));

app.use('/', indexRouter);
app.use('/auth', authRouter);

(async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
})();
