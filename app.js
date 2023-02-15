// IMPORTS
const cors = require("cors")
const express = require('express')
const morgan = require("morgan")
const messagesController = require("./controllers/messagesController.js")
const usersController = require("./controllers/usersController")
const { PORT, CLIENT_URL } = require('./constants')
const { userAuth } = require('./validations/auth');

// CONFIGURATION
const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors({ origin: CLIENT_URL, credentials: true}))

// CONTROLLERS
app.use("/messages", messagesController)
app.use("/users", usersController)

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the messages API")
})

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})

console.log(CLIENT_URL)

// EXPORT
module.exports = app;