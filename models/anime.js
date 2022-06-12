/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const mongoose = require("./connections")

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
// const Schema = mongoose.Schema
// const model = mongoose.model
//is equal to;
const { Schema , model } = mongoose

// Make fruits schema
const animeSchema = new Schema({
    name: String,
    info: String,
    img: String,
    username: String,
})
const Anime = model("Anime", animeSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Anime;