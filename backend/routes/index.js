const express = require('express');
const router = express.Router();
const GameRoom = require('../models/room')

router.get('/createRoom',async function(req, res, next) {
    try{
      const room = await new GameRoom().save();
      res.json({id: room._id});
    }catch(e){
      console.log('createRoom ERROR', e)
    }
});



module.exports = router;
