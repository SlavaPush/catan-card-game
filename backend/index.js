const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");
const WebSocket = require("ws");
require("dotenv").config();
const GameRoom = require("./models/room");
const path = require("path");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve("../frontend/build/"))); // DEPLOY

const wss = new WebSocket.Server({
  server,
});

// send data to clients
const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    // send for everyone except author
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

const resaveStateCardsToDb = async (id, state) => {
  try {
    const room = await GameRoom.findById(id);
    room.state.cards = state;
    room.save();
    return;
  } catch (e) {
    console.log("resaveStateCardsToDb ERROR", e);
  }
  return;
};
const pushStateMessageInDb = async (idRoom, author,message) => {
  try {
    const room = await GameRoom.findById(idRoom);
    room.state.message.push({message, author})
    room.save();
    return;
  } catch (e) {
    console.log("resaveStateCardsToDb ERROR", e);
  }
  return;
};

const searchStateCardsInDb = async (id) => {
  try {
    const room = await GameRoom.findById(id);
    const stateNow = room.state.cards;
    return stateNow;
  } catch (e) {
    console.log("searchStateCardsInDb ERROR", e);
  }
};
const searchStateMessageInDb = async (id) => {
  try {
    const room = await GameRoom.findById(id);
    const stateMessageNow = room.state.message;
    return stateMessageNow;
  } catch (e) {
    console.log("searchStateCardsInDb ERROR", e);
  }
};

wss.on("connection", (ws) => {
  console.log("connect new user"); //@saga_step_3

  ws.on("message", async (message) => {//@saga_step_4
    
    const data = JSON.parse(message);

    switch (data.type) {
      case "SAGA_STATE_TRANSFER":
        await resaveStateCardsToDb(data.id, data.state);
        broadcast(
          {
            type: "TEST_STATE_SERVER_TO_CLIENT",
            state: data.state,
          },
          ws
        );
        break;

      case "STEP_CHANGE":
        broadcast(
          {
            type: "CHANGE_STEP_TO_CLIENT",
          },
          ws
        );
        break;

      case "SAGA_SEARCH_ROOM_IN_DB":
        const stateCardsNow = await searchStateCardsInDb(data.id);
        const stateMessageNow = await searchStateMessageInDb(data.id);
        ws.send(
          JSON.stringify({
            type: "STATE_CARDS_FOR_PLAYER_RECIVED",
            state: stateCardsNow,
            message: stateMessageNow,
          })
        );
        break;

      case "SAGA_WINNER_NOW":
        ws.send(
          JSON.stringify({
            type: "WINNER_NOW_TO_CLIENT",
            winner: data.playerNow,
          })
        );
        broadcast(
          {
            type: "WINNER_NOW_TO_CLIENT",
            winner: data.playerNow,
          },
          ws
        );
        break;

      case "SAGA_REMOVE_OPPONENT_CARD":
        ws.send(
          JSON.stringify({
            type: "REMOVE_OPPONENT_CARD",
            payload: data.payload,
          })
        );
        broadcast(
          {
            type: "REMOVE_OPPONENT_CARD",
            payload: data.payload,
          },
          ws
        );
        break;

      case "SAGA_CITY_LOGIC":
        ws.send(
          JSON.stringify({
            type: "CITY_LOGIC",
            playerNow: data.payload.playerNow,
            countString: data.payload.countString,
          })
        );
        broadcast(
          {
            type: "CITY_LOGIC",
            playerNow: data.payload.playerNow,
            countString: data.payload.countString,
          },
          ws
        );
        break;

      case "ADD_MESSAGE":
        await pushStateMessageInDb(data.idRoom, data.author,data.message);
        broadcast(
          {
            type: "MESSAGE_RECEIVED",
            message: data.message,
            author: data.author,
          },
          ws
        );
        break;

      case "ping":
        break;

      default:
        break;
    }
  });
  ws.on("close", () => {
    console.log("user disconnect");
  });
  ws.on("error", (error) => {
    console.log(error);
  });
});

const { PORT, MONGODB_URI } = process.env;

const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");

const store = new MongoStore({
  collection: "sessions",
  uri: MONGODB_URI,
});

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
      expires: 60 * 60 * 1000,
    },
  })
);

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.get("*", (req, res) => {
  //DEPLOY
  res.sendFile(path.resolve("../frontend/build/index.html"));
});

(async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();
