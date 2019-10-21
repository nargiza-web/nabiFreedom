const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();


const app = express();

 //member-login
router.get("/", (req, res) => {
   let data = {};
   if (req.query.registeredSuccessfully) data.registeredSuccessfully= true;
   if(req.loggedOutSuccessfully) data.loggedOutSuccessfully = true;
    res.render('/login', data);
});


router.post("/login", async (req, res) => {
    try{
        //check to see if the user exists in the database
        let dbUser = await dbUser.CheckForUser(req.body.email);
        if (!dbUser) throw new Error("Login Failed");
        bcrypt.compare(req.body.password, dbUser.password, (err, same) =>{
            if (err) throw err;
            if (!same) throw new Error('Incorrect password');
            req.session.user_id = db.User.id;
            res.redirect("/index")
        });
    } catch (e){
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