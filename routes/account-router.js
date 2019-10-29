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


router.get("/logout", (req, res) => {
    req.session.destroy()
    res.redirect("/")
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

router.post("/dashboard", accountHelper.redirectIfNotSignedIn, (req, res) => {
    let userSession = req.session.user
    let serviceStr = JSON.stringify({
            penpal:req.body.penpal,
            goodies:req.body.goodies,
            jobSponsor:req.body.jobSponsor,
            mentor:req.body.mentor,
            other:req.body.other
        })
    accountHelper.getEntry(userSession.userType, {id: userSession.userId}, (user) => {
        user.update(
            {services: serviceStr},
            {
                returning:true,
                where:{id:user.id}
            }
        )
        .then(res.redirect("/account/dashboard?changesSaved=true"))
        .catch(res.redirect("/account/dashboard?changesSaved=false"))    
    })
})



module.exports = router