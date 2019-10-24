const express = require("express")
const router = express.Router()
const bcrpyt = require("bcrypt")
const signupRouter = require("./user/signup")
const loginRouter = require("./user/login")
const models = require("../models")
const accountHelper = require("../helpers/account-helpers")

router.use("/signup", signupRouter)
router.use("/login", loginRouter)

router.get("/", accountHelper.redirectIfNotSignedIn, (req, res) => {
    res.redirect("account/dashboard")
})

router.get("/dashboard",accountHelper.redirectIfNotSignedIn, (req, res) => {
    let userSession = req.session.user
    accountHelper.getEntry(userSession.userType, {id:userSession.userId}, (user) => {
        if (!user) {
            req.session.destroy()
            res.redirect("/account")
        } else {
            delete user.password
            res.render("account/dashboard", {userType:userSession.userType, user:user})
        }

    })
})

module.exports = router