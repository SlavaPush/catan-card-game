const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');


router.post('/register', async (req, res) => {
  try{
    const {name, email, hashPass} = req.body;
    const candidate = await User.findOne({
      email
    });

    if (!candidate){
      const user = new User({
        email,
        name,
        password: hashPass,
      });
      await user.save();
      req.session.user = user;
      req.session.user.password = null;
      req.session.save(err => {
        if (err) {
          throw err;
        }
        res.json({success: true});
      });
    }else{
      res.json({message: 'e-mail already exists'})
    }
  }catch (error) {
    res.json({
      error
    });
  }
});

router.post('/login', async (req, res) => {
  try{
    const {email, password} = req.body;
    const candidate = await User.findOne({
      email
    });
    if (candidate){
      const areSame = await bcrypt.compare(password, candidate.password);
      if (areSame) {
        req.session.user = candidate;
        req.session.user.password = null;
        req.session.save(err => {
          if (err) {
            throw err;
          }
          res.json({success: true});
        });
      }else {
        res.json({message: 'incorrect password'});
      }
    }else{
      res.json({message: 'incorrect email'});
    }
  }catch (error) {
    res.json({
      error
    });
  }
})

module.exports = router;

