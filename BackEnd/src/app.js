const express = require("express");
import config from "./configs/index";
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const router = require("./api/routes/index");

// const authAdminRoutes = require("./routes/admin");

const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});



app.use("", router);


app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;

    console.log(error)
    res.status(status).json({message: message});
});

const port = process.env.PORT || 8000;

const MONGODB_URL =config.DB_CONNECTION_STRING;
mongoose.connect(MONGODB_URL)
    .then(result => {
        console.log("Database connected !")
        app.listen(port);
    })
    .catch(err => {
        console.log(err);
        console.log("Database connection failed")
    })







// // app.use(passport.initialize());
// // app.use(passport.session());

// // Create a new room
// app.post("/api/rooms", async (req, res) => {
//   try {
//     const { name, description, price, image, type } = req.body;

//     // Create a new room document
//     const newRoom = new Room({ name, description, price, image, type });
//     await newRoom.save();

//     res.status(201).json(newRoom);
//   } catch (error) {
//     res.status(500).json({ error: "Error creating room" });
//   }
// });

// // Fetch all rooms
// app.get("/api/rooms", async (req, res) => {
//   try {
//     const rooms = await Room.find({});
//     res.status(200).json(rooms);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching rooms" });
//   }
// });

