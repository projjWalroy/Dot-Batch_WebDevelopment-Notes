const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware 
app.use(express.json());  //for parsing

const blog = require('./routes/blog');

// mounting
app.use("/api/v1",blog); //it means every request will have this path after local host
//every req which will have /api/v1 will goes to the folder structure blog(where we have routes)

const dbConnect = require('./config/database');
dbConnect();

// Start Server 
app.listen(PORT,()=>{
    console.log("App is Running at the",PORT);
})

// Default Route 
app.get('/', (req,res) => {
    res.send(`<h1>HomePage</h1>`)
})


/*
npm i codemon
npm i dotenv
npm i mongoose

*/