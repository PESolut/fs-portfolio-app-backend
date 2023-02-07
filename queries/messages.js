const db = require("../db/dbConfig");

const getAllMessages = async () => {
            try {
                const allMessages = await db.any("SELECT * from messages")
                return allMessages
            } catch (error) {
                return error
            }
}

const getMessage = async (id) => {
    try {
        const oneMessage = await db.one("SELECT * FROM messages WHERE id=$1", id)
        return oneMessage
    } catch (error) {
        return error
    }
}

module.exports = { getAllMessages, getMessage }