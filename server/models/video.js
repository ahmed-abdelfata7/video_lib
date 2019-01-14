const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creating a video schema 
const videoSchema = new Schema({
    title: String,
    url: String,
    description: String
});
//creating a model first parameter is the model name second parameter is the schema third parameter is collection name in database
module.exports = mongoose.model("Video", videoSchema, "videos");