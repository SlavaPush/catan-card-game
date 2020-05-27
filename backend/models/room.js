const {Schema, model} = require('mongoose');


const roomSchema = new Schema({
  state:{
    cards:{type:Object},
    message:{type:Array},
  },
  whoNow:{type:String}
});

module.exports = model('GameRoom', roomSchema);
