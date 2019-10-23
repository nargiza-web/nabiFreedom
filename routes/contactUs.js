const express = require('express');
const router = express.Router();
const models= require('../models');

router.get("/", (req, res) =>{
    res.render("contactUs", {query: req.query})
});

router.post("/", async (req, res) =>{
    let user = await models.contactUs.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        title: req.body.title,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        purposeForContact: req.body.message
    })
    .then(() =>{
        res.redirect("/contactUs?submitwassucceccfull=true")
    })
});

module.exports = router;