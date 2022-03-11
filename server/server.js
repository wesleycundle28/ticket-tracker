const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const user = require("./routes/userRoutes");
const ticket = require("./routes/ticketRoutes");
const program = require("./routes/programRoutes");
const comment = require("./routes/commentRoutes");

//pulls info from dotenv folder (start)
require("dotenv").config();
//pulls info from dotenv folder (end)

//allows communication between 2 different ports (start)
app.use(cors({ origin: "input origin" }));
//allows communication between 2 different ports (end)

//allow json to be sent between frontend and backend (start)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//allow json to be sent between frontend and backend (end)

//connect to mongo database (start)

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected...");
  })
  .catch((error) => {
    console.log(error);
  });

//connect to mongo database (end)

//routes (start)

app.use("/user", user);
// app.use("/ticket", ticket);
// app.use("/program", program);
// app.use("/comment", comment);
//routes (end)
//code for deployment (start)
if (process.env.NODE_ENV === "production") {
  // console.log("production mode");
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), (error) => {
      if (error) {
        res.status(500).send(error);
      }
    });
  });
}

//code for deployment (end)

//listen on port 3500 (start)
PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server connected to 4000`);
});

//listen on port 3500 (end)
