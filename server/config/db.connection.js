const db_config = require("./db.config");
const mongoose = require("mongoose");
//mongoDB connection 
mongoose.connect(db_config.url, { useNewUrlParser: true })
    .then(() => {
        console.log("Database connection done");
    })
    .catch((err) => {
        console.log(err);
    });
