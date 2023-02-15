const db = require("../db/dbConfig")

const getAllUsers = async () => {
    try {
        allUsers = await db.any('SELECT id, name, email from users')
        return allUsers
    } catch (error) {
        return error
    }
}

const createUser = async (user) => {
    try {
        const newUser = await db.one(`INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *`, [user.name, user.email, user.password])
        return newUser
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllUsers,
    createUser
}