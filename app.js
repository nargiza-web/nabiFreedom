const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const accountRouter = require("./routes/account-router")
const aboutUs = require("./routes/aboutUs")
require('dotenv').config()

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}))

app.use("/account", accountRouter)

app.use("/aboutUs", aboutUs)

app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("index")   
})


app.listen(process.env.PORT, () => {
    if (process.env.PORT) {
        console.log(`Server running on port ${process.env.PORT}`)
    } else {
        let cRed = "\u001b[31m"; let cDefault = "\u001b[0m";
        console.log(`${cRed}WARNING: No Port specified! \n${cDefault}Please check the .env file in the project's root.`)
    }
})
