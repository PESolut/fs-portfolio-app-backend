const express = require("express")
const messages = express.Router()
// validations here
const {
    getAllMessages,
    getMessage
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

// SHOW
messages.get("/:id", async (req, res) =>{
    const { id } = req.params;
    console.log(res)
    const message = await getMessage(id)
    if (message.message) {
        res.status(200).json(message)
    } else {
        res.status(404).json({ error: "not found" })
    }
})



module.exports = messages