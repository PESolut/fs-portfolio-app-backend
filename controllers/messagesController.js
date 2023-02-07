const express = require("express")
const messages = express.Router()
// validations here
const {
    getAllMessages,
    getMessage,
    createMessage
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

// CREATE
messages.post('/', async (req, res) => {
    try {
        const message = await createMessage(req.body)
        res.status(200).json(message)
    } catch (error) {
        res.status(500).json({ error: error });
    }
})



module.exports = messages