const express = require("express")
const router = express.Router()
const bcrpyt = require("bcrypt")

router.get("/", (req, res) => {
    //member-login
})

router.post("/", (req, res) => {
    if (req.params.signup == "VOLUNTEER") {
        //volunteer signup
    } else if (req.params.signup == "MEMBER") {
        //member signup
    } else {
        res.send("An error occurred during login!")
    }
})

module.exports = router