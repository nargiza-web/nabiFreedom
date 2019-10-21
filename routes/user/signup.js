const express = require("express")
const router = express.Router()
const bcrpyt = require("bcrypt")

router.get("/", (req, res) => {
    res.render("account/signup")
    //sign-up page
})

router.post("/", (req, res) => {
    if (req.params.signup == "VOLUNTEER") {
        //volunteer signup
    } else if (req.params.signup == "MEMBER") {
        res.send("Member Signed up.")
        //member signup
    } else {
        res.send("An error occurred during signup!")
    }
})

module.exports = router