import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import {connect} from "./Utils/DatabaseConnection"
import logger from "./Utils/logger";
import { googleAuth } from "./configs/google.config";
import config from "./configs";
import MongoStore from "connect-mongo";
import {routesInit} from "./api/routes";


const PORT = process.env.PORT || "8090";
const app =  express();
app.use(cors());
app.use(express.json({limit:"20mb"}));

app.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: config.DB_CONNECTION_STRING}),
    cookie:{
        secure: false,
        expires: new Date(Date.now()+10000),
        maxAge: 10000,
    },
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, next)=>{
    res.send("<a href='http://localhost:8090/auth/google'>login with the Google</a>");
    next();
});

app.get("/",(req,res,next)=>{
    res.send("<h2> Saru Blue Saphire Hotel </h2>");
    next();
});

app.listen(PORT,()=> {
    logger.info("This is testing");
    logger.info('server is up and running on port', PORT);
    connect();
    routesInit(app, passport);
    googleAuth(passport);
})