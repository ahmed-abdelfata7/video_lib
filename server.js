"use strict";
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
//making db connection
require("./server/config/db.connection");
const api = require("./server/routes/api");

const port = 3000;
//connect angular with express
app.use(express.static(path.join(__dirname, 'dist/ngApp')));
//bodyParser init
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//init api route 
app.use('/api', api);
//trying angular express connection
app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "dist/ngApp/index.html"));
});

//running server 
app.listen(port, () => {
    console.log("server is running at http://localhost:" + port);
})
