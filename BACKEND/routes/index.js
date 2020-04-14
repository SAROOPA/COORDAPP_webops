var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

var userDataSchema = new Schema({
  name: {type:String,required:true},
  emailId: {type:String,required:true},
  password: {type:String},
  confirmPassword: {type:String},
  state: {type:String,required:true},
  number: {type:String,required:true}
},{collection:'user-Data1'});

var UserData1 = mongoose.model('user-Data1', userDataSchema);


/* GET home page. */
router.get ('/', function(req, res, next) {
  res.render('index',{ title: 'BACKEND',success:false , errors: req.session.errors });
});

router.get ('/get-data', function(req, res, next) {
  UserData1.find()
      .then(function(doc){
    res.render('index',{items:doc});
  })
});

router.post('/insert', function(req, res, next) {
        var encPassword;
         bcrypt.genSalt(saltRounds, function(err, salt) {
           bcrypt.hash(req.body.password, salt, function (err, hash) {
           encPassword = hash;
         }); });
         var encConfirmPassword;
         bcrypt.genSalt(saltRounds, function (err, salt) {
           bcrypt.hash(req.body.confirmPassword, salt, function (err, hash) {
             encConfirmPassword = hash;
           });
         });
  var item = {
    name : req.body.name,
    emailId: req.body.emailId,
    password: encPassword,
    confirmPassword: encConfirmPassword,
    state: req.body.state,
    number: req.body.number
  };
  var data = new UserData1(item);
    req.check('name' ,'name cant be empty').notEmpty();
    req.check('emailId','invalid email').isEmail();
    req.check('password','invalid password').isLength({min:6}).equals(req.body.confirmPassword);
    req.check('number','enter 10 digits').isLength({min:10,max:10});
  var errors = req.validationErrors();
  if(errors){
    req.session.errors = errors;
  }
  else {
    data.save();
  }
  res.redirect('/');
});

router.post('/update',function (req,res,next) {
  var encPassword;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      encPassword = hash;
    });
  });
  var item = {
    name: req.body.name,
    emailId: req.body.emailId,
    password: encPassword,
    state: req.body.state,
    number: req.body.number
  };

var id =req.body.id;
UserData1.findById(id,function (err,doc) {
  if(err){
    console.error('error,no entry found');
  }
      doc.name = req.body.name;
      doc.emailId = req.body.emailId;
      doc.password = req.body.password;
      doc.state = req.body.state,
      doc.number = req.body.number;
      doc.save();

});
  res.redirect('/');
});


router.post('/delete',function (req,res,next) {
  var id =req.body.id;
  UserData1.findByIdAndRemove(id).exec();
  res.redirect('/');
});

module.exports = router;
