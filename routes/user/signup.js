const express = require("express")
const router = express.Router()
const bcrpyt = require("bcrypt")
const models = require("../../models")


router.get("/", (req, res) => {
    res.render("account/signup-member")
    //sign-up page
})

router.post("/", async (req, res) => {
    console.log(req.query)
    if (req.query.signup == "VOLUNTEER") {
        
        //volunteer signup
    } else if (req.query.signup == "MEMBER") {
        let user =  await models.Member.findOne({
            where: {email: req.body.email}
        })
        console.log(user)
        if (!user && req.body.password.length > 0) {
            bcrpyt.hash(req.body.password, 10, (err, encrypted) => {
                if (err) throw err;
                models.Member.create({
                    email:req.body.email,
                    password:encrypted,
                    first_name:req.body.first_name,
                    last_name:req.body.last_name,
                    phone_number:req.body.phone_number,
                    address:`${req.body.streetNumber} ${req.body.streetName} ${req.body.city}, ${req.body.state} ${req.body.zipCode}`,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
                .then((resolve) => {
                    res.redirect("/account/login")
                })
                .catch((reason) => {
                    res.send("Error signing you up!")
                })
            })
        } 
        res.send("Member Signed up.")
        //member signup
    } else {
        res.send("An error occurred during signup!")
    }
})

module.exports = router