const db = require("../db/dbConfig");

const getAllMessages = async () => {
            try {
                const allMessages = await db.any("SELECT * from messages")
                return allMessages
            } catch (error) {
                return error
            }
}

module.exports = { getAllMessages }