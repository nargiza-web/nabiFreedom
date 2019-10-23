const express = require("express")
const router = express.Router()
// const bcrypt = require("bcrypt")
const models = require("../../models")
const accountHelper = require("../../helpers/account-helpers")

router.get("/", (req, res) => {
    res.render("account/login.pug", {query:req.query})
    //member-login
})

router.post("/", (req, res) => {
    let userType;
    if (req.query.login == "MEMBER") userType = "Member";
    else if (req.query.login == "VOLUNTEER") userType = "Volunteer";
    else userType = "NOMODEL"

    let loginFailure = () => res.redirect("/account/login?loginFailed=true");

    models[userType].findOne({
        where:{email:req.body.email}
    })
    .then((user) => {
        if (user) {
            accountHelper.chkPassword(req.body.password, user, x => {
                req.session.user = {userType:userType, userId:user.id}
                res.redirect("/")
            }, loginFailure)
        } else loginFailure();
    })
    .catch(loginFailure)


})

module.exports = router