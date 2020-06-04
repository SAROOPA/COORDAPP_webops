const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

//connecting db

mongoose
  .connect("mongodb://127.0.0.1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

//importing router

const Routes = require("./routes");

app.use("/form", Routes);

//port-setup

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("MongoDB running");
});
