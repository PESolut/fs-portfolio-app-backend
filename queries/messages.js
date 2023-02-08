const db = require("../db/dbConfig");

// INDEX
const getAllMessages = async () => {
            try {
                const allMessages = await db.any("SELECT * from messages")
                return allMessages
            } catch (error) {
                return error
            }
}

// SHOW
const getMessage = async (id) => {
    try {
        const oneMessage = await db.one("SELECT * FROM messages WHERE id=$1", id)
        return oneMessage
    } catch (error) {
        return error
    }
}

// CREATE
const createMessage = async (message) => {
    try {
        const newMessage = await db.one(
            "INSERT INTO messages (user_id, date, time, message) VALUES($1, $2, $3, $4) RETURNING *", [message.user_id, message.date, message.time, message.message]
        )
        return newMessage
    } catch (error) {
        return error
    }
}

// DELETE
const deleteMessage = async (id) => {
    try {
        const deletedMessage = await db.one('DELETE FROM messages WHERE id=$1 RETURNING *', id)
        return deletedMessage
    } catch (error) {
        return error
    }
}

// UPDATE
const updateMessage = async (id, message) => {
    try {
        const updatedMessage = await db.one('UPDATE messages SET user_id=$1, date=$2, time=$3, message=$4 WHERE id=$5 RETURNING *', [message.user_id, message.date, message.time, message.message, id])
        return updatedMessage
    } catch (error) {
        return error
    }
}

module.exports = { getAllMessages, getMessage, createMessage, deleteMessage, updateMessage }