const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/Workout-Tracker", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use(require("./routes/api.js"));
// app.use(require("./routes/views.js"));

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
