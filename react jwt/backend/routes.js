const express = require("express");

const User = require("./models"); //importing schema for signup

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const Routes = express.Router();

//router for signup-form

Routes.post("/reg", async (req, res) => {
  try {
    //encrypting password
    var encPwd = "";

    bcrypt.hash(req.password, 10, function (err, hash) {
      if (err) {
        res.json(err);
      } else {
        encPwd = hash;
      }
    });

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: encPwd,
      number: req.body.number,
      state: req.body.state,
    });

    var data = await user.save();

    res.json(data);
  } catch (err) {
    res.status(400);
  }
});

//router for login-form

Routes.post("/log", async (req, res) => {
  try {
    var checkData = await User.findOne(
      { email: req.body.email },
      (err, user) => {
        if (err) {
          res.status(400);
        } else {
          checkData = user;
        }
      }
    );

    //checking if email exist

    if (!checkData) {
      res.status(400).json("email doesnt exist");
    }

    //comparing password

    bcrypt.compare(req.body.password, checkData.password).then((isTrue) => {
      if (!isTrue) {
        return res.status(400).json("invalid password");
      }
    });

    //creating token

    jwt.sign(
      { email: checkData.email },
      "1234",
      { expiresIn: 1800 },
      (err, token) => {
        if (err) {
          res.json(err);
        } else res.json(token);
      }
    );
  } catch (err) {
    res.status(400);
  }
});

//router for get-data

const verifyData = (req, res, next) => {
  var token = req.header("auth");
  req.token = token;
  next();
};

Routes.get("/getdata", verifyData, async (req, res) => {
  jwt.verify(req.token, "1234", async (err, data) => {
    if (err) {
      res.json(err);
    } else {
      const data = await User.find().select(["-password"]);

      res.json(data);
    }
  });
});

module.exports = Routes;
