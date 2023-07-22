import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import {connect} from "./Utils/DatabaseConnection"
import logger from "./Utils/logger";


const PORT = process.env.PORT || "8090";
const app =  express();
app.use(cors());
app.use(express.json({limit:"20mb"}));

app.get("/",(req,res,next)=>{
    res.send("<h2> Saru Blue Saphire Hotel </h2>");
    next();
});

app.listen(PORT,()=> {
    logger.info("This is testing");
    logger.info('server is up and running on port', PORT);
    connect();
})