const { findByIdAndDelete } = require("../models/hero")
const Hero = require("../models/hero")

exports.getHero = (req, res) => {
    Hero.find()
    .then((heroes) => {
        res.json(heroes)
    })
    .catch((err) => {
        res.json(err)
    })
}

exports.postHero = (req, res) => {
   Hero.create({
    heroName: req.body.heroName,
    heroPower: req.body.heroPower,
    sidekick: req.body.sidekick,
    catchPhrase: req.body.catchPhrase
    })
    .then(hero => {
        res.json(hero);
    })
    .catch(err => {
        res.json(err)
    })
}

exports.deleteHero = (req, res) => {
    Hero.findByIdAndDelete(req.params.id)
    .then(() => {
        Hero.find()
        .then((heroes) => {
            res.json(heroes)
        })
    })
    .catch((err) => {
        res.json(err)
    })
}