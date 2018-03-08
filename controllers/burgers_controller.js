var express = require("express");

var router = express.Router();

var burger = require("../models/bugers.js");

router.get("/",function (req, res) {
        res.render("index");
});

// router.post('/api/bugers', function (req, res) {
//     burger.create
// })



module.exports = router;


