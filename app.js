const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//  Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const app = express();

const PORT = process.env.PORT || 3000;

// Connect to DB
dotenv.config();
mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  "mongodb://localhost:27017/apiauth",
  { useNewUrlParser: true },
  () => {
    console.log(`mongodb successfull connected`);
  }
);

// bodyparse
app.use(bodyParser.json());

// Route middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => console.log(`server up and running PORT ${PORT}`));
