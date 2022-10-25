import express from "express";


const PORT = process.env.PORT || 4000;

const app = express();


//Middleware
app.use('/', (req, res)=>{
    res.send("Hola Mundo ExpressJS");
});

app.listen(PORT, () => {
    console.log(` Server listening on ${PORT}`);
});