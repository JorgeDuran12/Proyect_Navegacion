import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import conectarDB from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

conectarDB();

//Middleware
app.use('/', (req, res)=>{
    res.json("Hola Mundo ExpressJS");
});

app.listen(PORT, () => {
    console.log(` Servidor encendido en el puerto # ${PORT}`);
});