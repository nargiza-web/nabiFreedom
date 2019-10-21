const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("account")
})

router.get("/login", (req, res) => {
    //member-login
})

router.get("/signup", (req, res) => {
    //sign-up page
})

router.post("/login", (req, res) => {
    if (req.params.signup == "VOLUNTEER") {
        //volunteer signup
    } else if (req.params.signup == "MEMBER") {
        //member signup
    } else {
        res.send("An error occurred during login!")
    }
})

router.post("/signup", (req, res) => {
    if (req.params.signup == "VOLUNTEER") {
        //volunteer signup
    } else if (req.params.signup == "MEMBER") {
        //member signup
    } else {
        res.send("An error occurred during signup!")
    }
})

module.exports = router