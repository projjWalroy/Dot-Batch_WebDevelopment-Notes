const mongoose = require("mongoose");

require("dotenv").config(); //to load .env in process

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);
    } );
}

module.exports = dbConnect;

//this used to ensure connection bwn application and db