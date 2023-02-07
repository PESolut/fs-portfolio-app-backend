const express = require("express")
const messages = express.Router()
// validations here
const {
    getAllMessages
} = require("../queries/messages")

// INDEX
messages.get('/', async (req, res) => {
    const allMessages = await getAllMessages();
    if (allMessages[0].message){
        res.status(200).json(allMessages)
    } else {
        res.status(500).json({ error: "server error" })
    }
})

module.exports = messages