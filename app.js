// IMPORTS
const cors = require("cors")
const express = require('express')
const morgan = require("morgan")
const messagesController = require("./controllers/messagesController.js")
const usersController = require("./controllers/usersController")

// CONFIGURATION
const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())

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

// EXPORT
module.exports = app;