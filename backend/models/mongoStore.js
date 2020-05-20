const {Schema, model} = require('mongoose');


const storeSchema = new Schema({
  store: {
    type: String,
  }
});

module.exports = model('GameStore', storeSchema);
