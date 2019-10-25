const express = require("express")
const path = require("path")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
const accountRouter = require("./routes/account-router")

const aboutUs = require("./routes/aboutUs")
const freshStart = require("./routes/freshStart")
const donationRouter = require("./routes/donation")
const takeAction = require("./routes/takeAction")
const contactUs = require("./routes/contactUs")

app.set("view engine", "pug")

require('dotenv').config()


//using session
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: true
	})
);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.locals.session = req.session
	next()
})
	
app.use("/account", accountRouter)

//app.use("/account/login", login)

app.use("/aboutUs", aboutUs)

app.use("/contactUs", contactUs)

app.use("/donation", donationRouter)

app.use("/freshStart", freshStart)

app.use("/takeAction", takeAction)



app.get("/", (req, res) => {
	res.render("index")   
})

// app.get("/aboutus", (req, res) =>{
//     res.render("aboutUs")
// });




app.listen(process.env.PORT, () => {
	if (process.env.PORT) {
		console.log(`Server running on port ${process.env.PORT}`)
	} else {
		let cRed = "\u001b[31m"; let cDefault = "\u001b[0m";
		console.log(`${cRed}WARNING: No Port specified! \n${cDefault}Please check the .env file in the project's root.`)
	}
})
