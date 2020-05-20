const {Schema, model} = require('mongoose');


const roomSchema = new Schema({
  state:{type:Object},
  whoNow:{type:String}
});

module.exports = model('GameRoom', roomSchema);
