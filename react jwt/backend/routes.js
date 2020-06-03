const express = require("express");

const User = require("./models"); //importing schema for signup

const jwt = require("jsonwebtoken");

const Routes = express.Router();

//router for signup-form

Routes.post("/reg", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
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

    if (!checkData) {
      res.status(400).json("email doesnt exist");
    }

    var IsPWDtrue = checkData.password == req.body.password;
    if (!IsPWDtrue) {
      res.json("invalid password");
    }

    var token = jwt.sign({ email: checkData.email }, "1234");
    res.header("auth", token).json(token);
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
