import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import { connect } from "./Utils/DatabaseConnection";
import logger from "./Utils/logger";
import { googleAuth } from "./configs/google.config";
import config from "./configs";
import MongoStore from "connect-mongo";
import { routesInit } from "./api/routes";
import Room from "./api/models/roomModel"; // Import the Room model

const PORT = process.env.PORT || "8090";
const app = express();
app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: config.DB_CONNECTION_STRING }),
  cookie: {
    secure: false,
    expires: new Date(Date.now() + 10000),
    maxAge: 10000,
  },
}));
app.use(passport.initialize());
app.use(passport.session());

// Create a new room
app.post("/api/rooms", async (req, res) => {
  try {
    const { name, description, price, image, type } = req.body;

    // Create a new room document
    const newRoom = new Room({ name, description, price, image, type });
    await newRoom.save();

    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: "Error creating room" });
  }
});

// Fetch all rooms
app.get("/api/rooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: "Error fetching rooms" });
  }
});

// ... other routes and middleware ...

app.listen(PORT, () => {
  logger.info("This is testing");
  logger.info('server is up and running on port', PORT);
  connect();
  routesInit(app, passport);
  googleAuth(passport);
});
