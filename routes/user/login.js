const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
// const bodyParser = require("body-parser")
const models = require('../../models')
// router.use(bodyParser.urlencoded({ extended: false }));
//  router.use(bodyParser.json());
 

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
    let email = req.body.email,
    password = req.body.password
         try {
        models.Member.findOne({
            where:{
                email:email
            }
        }) 
        .then((member) => { 
            if(member){
                 bcrypt.compare(req.body.password, member.password, (err, same) =>{
                 if (err) throw err;
                 if (!same) throw new Error('Incorrect password');
                 req.session.user_id = db.User.id;   
                 res.redirect("/")
                });
        }
        })} catch (e){
                // console.log("everything is exploding!!!")
                // res.send(e);
            }
    });



//                 res.status(500).json({status: 500, message: "email does not exist in our database"
//             }) } else //{
//                 // let member = models.Member.build({
//                 //     email:email,
//                 //     password:password
//                 //})
//                 user.save()
//             } 
//             })
//         })
//     /*}*/
// //         bcrypt.compare(req.body.password, dbMember.password, (err, same) =>{
// //             console.log('we are inside bcrypt')
//             if (err) throw err;
//             if (!same) throw new Error('Incorrect password');
//             req.session.user_id = db.User.id;
            
//             res.redirect("/index")
//         });
//     } catch (e){
//         console.log("everything is exploding!!!")
//         res.send(e);
//     }
// });




//     if (req.params.signup == "VOLUNTEER") {
//         //volunteer signup
//     } else if (req.params.signup == "MEMBER") {
//         //member signup
//     } else {
//         res.send("An error occurred during login!")
//     }
// })

module.exports = router