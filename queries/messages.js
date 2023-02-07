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



module.exports = { getAllMessages, getMessage, createMessage }