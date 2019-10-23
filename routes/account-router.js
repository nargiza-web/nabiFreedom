const express = require("express")
const router = express.Router()
const bcrpyt = require("bcrypt")
const signupRouter = require("./user/signup")
const loginRouter = require("./user/login")

router.use("/signup", signupRouter)
router.use("/login", loginRouter)

//router.express.static('public')

router.get("/", (req, res) => {
    res.render("account")
})

//dashboard
router.get('/dashboard', (req, res) =>{
    // console.log ('i am here')
    res.render("account/dashboard")
})



//logout user
router.get('/logout', (req, res) => {
    let data ={};
    req.session.destroy();
    req.redirect("/login?loggedOutSuccessfully=true");
});


module.exports = router