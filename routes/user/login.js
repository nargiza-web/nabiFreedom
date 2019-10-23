const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: false }));
 router.use(bodyParser.json());
 
  //load Member module
require('../../models/member')
const Member = 

  //member-login
 
router.get("/", (req, res) => {
   let data = {};
    if (req.query.registeredSuccessfully) data.registeredSuccessfully= true;
     console.log (data)
     if(req.loggedOutSuccessfully) data.loggedOutSuccessfully = true;
    console.log (req.body.email)
    res.render('account/login', data);
  // res.send("I ran!")
});


router.post("/login", async (req, res) => {
    console.log("are we using this at all")
    try{
       // check to see if the user exists in the database
        let dbUser = await dbUser.CheckForUser(req.body.email);
        if (!dbUser) throw new Error("Login Failed");
        console.log("this is before bcrypt")
        bcrypt.compare(req.body.password, dbUser.password, (err, same) =>{
            console.log('we are inside bcrypt')
            if (err) throw err;
            if (!same) throw new Error('Incorrect password');
            req.session.user_id = db.User.id;
            
            res.redirect("/index")
        });
    } catch (e){
        console.log("everything is exploding!!!")
        res.send(e);
    }
});




//     if (req.params.signup == "VOLUNTEER") {
//         //volunteer signup
//     } else if (req.params.signup == "MEMBER") {
//         //member signup
//     } else {
//         res.send("An error occurred during login!")
//     }
// })

module.exports = router