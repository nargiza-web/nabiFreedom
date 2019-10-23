const express = require('express');
const router = express.Router();
router.get("/", (req,res) => {
    console.log("is this working")
    res.render("aboutUs")
});

// router.get('/home', (req, res) => {
//     res.render("index")
// });

module.exports= router