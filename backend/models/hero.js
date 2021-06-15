const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
    heroName: String,
    heroPower: String,
    sidekick: String,
    catchPhrase: String
})

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;