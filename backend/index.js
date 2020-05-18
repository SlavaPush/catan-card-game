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

wss.on('connection', ws => {
  console.log('connect new user');

  ws.on('message', (message) => {

    const data = JSON.parse(message);
    console.log(data);

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
