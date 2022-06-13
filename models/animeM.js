/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const mongoose = require("./connection.js")

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
const { Schema , model } = mongoose

// Make fruits schema
const animeSchema = new Schema({
    name: String,
    image: String,
    info: String,
    username: String,
})
const Anime = model("Anime", animeSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Anime;