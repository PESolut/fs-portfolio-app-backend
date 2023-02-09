const { all } = require("../app")
const db = require("../db/dbConfig")

const getAllComments = async () => {
    try {
        const allComments = await db.any('SELECT * from comments')
        return allComments

    } catch (error) {
        return error
    }
}

const getComment = async (id) => {
    try {
        const oneComment = await db.one(`SELECT * from comments WHERE id=$1`, id)
    } catch (error) {
        return error
    }
}

const createComment = async (comment) => {
    try {
        const newComment = await db.one(`INSERT INTO comments (user_id, message_id, date, time, comment) VALUES($1, $2, $3, $4, $5) RETURNING *`, [comment.user_id, comment.message_id, comment.date, comment.time, comment.comment])
        return newComment
    } catch (error) {
        return error
    }
}

const updateComment = async () => {
    try {
        
    } catch (error) {
        return error
    }
}

const deleteComment = async () => {
    try {
        
    } catch (error) {
        return error
    }
}


module.exports = {
    getAllComments
}