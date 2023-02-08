const express = require("express")
const messages = express.Router()
// validations here

const {
    getAllMessages,
    getMessage,
    createMessage,
    deleteMessage,
    updateMessage
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
    const message = await getMessage(id)
    if (message.time) {
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

// DELETE
messages.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedMessage = await deleteMessage(id)
        res.status(200).json(deletedMessage)
    } catch (error) {
        res.status(404)({ error: "id not found"})
    }
})

// UPDATE
messages.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updatedMessage = await updateMessage(id, req.body)
        res.status(200).json(updatedMessage)
    } catch (error) {
        res.status(404).json({ error: "message not found" })
    }
})

module.exports = messages