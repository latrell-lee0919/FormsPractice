const express = require("express");
const router = express.Router();

const heroController = require('../controllers/hero');

router.get("/", heroController.getHero);

router.post("/", heroController.postHero);

router.delete("/:id", heroController.deleteHero);

module.exports = {
    routes : router,
}