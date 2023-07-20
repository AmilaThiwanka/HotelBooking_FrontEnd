import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || "8090";
const app =  express();
app.use(cors());
app.use(express.json({limit:"20mb"}));

app.get("/",(req,res,next)=>{
    res.send("<h2> Saru Blue Saphire Hotel </h2>")
})

app.listen(PORT,()=> {
    console.log('server is up and running on port', PORT);
})