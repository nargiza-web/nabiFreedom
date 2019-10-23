const express = require("express")
const router = express.Router()
const bcrpyt = require("bcrypt")
const models = require("../../models")
const accountHelper = require("../../helpers/account-helpers")


router.get("/", (req, res) => {
    res.render("account/signup", {query: req.query})
    //sign-up page
})

router.post("/", async (req, res) => {
    let userType
    if (req.query.signup == "MEMBER") userType = "Member";
    else if (req.query.signup == "VOLUNTEER") userType = "Volunteer";
    else userType = "NOMODEL"

    bcrpyt.hash(req.body.password, 10, (err, encrypted) => {
        if (err) throw err;
        accountHelper.createEntry(userType, {
            email:req.body.email,
            password:encrypted,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            phone_number:req.body.phone_number,
            address:`${req.body.streetNumber} ${req.body.streetName} ${req.body.city}, ${req.body.state} ${req.body.zipCode}`,
            createdAt: new Date(),
            updatedAt: new Date()
        }, 
        resolve => res.redirect("/account/login?registeredSuccessfully=true"), 
        reason => res.redirect("/account/signup?signupFailed=true"))
    })
})

module.exports = router