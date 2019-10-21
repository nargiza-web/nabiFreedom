const express = require("express")
const router = express.Router()
const bcrpyt = require("bcrypt")
const signupRouter = require("./user/signup")
const loginRouter = require("./user/login")

router.use("/signup", signupRouter)
router.use("/login", loginRouter)

router.get("/", (req, res) => {
    res.render("account")
})

module.exports = router