const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3001;
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//import routes
const postsRoute = require("./routes/posts");

//middleware
app.use("/posts", postsRoute);

//routes
app.get("/", (req, res) => {
  res.send("Home");
});

//connect to database
mongoose
  .connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED!");
  })
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });
//server listening
app.listen(port, () => {
  console.log(`app is working on ${port}`);
});
