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
        return oneComment
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

const updateComment = async (id, comment) => {
    try {
        const updatedComment = await db.one(
            "UPDATE comments SET user_id=$1, message_id=$2, date=$3, time=$4, comment=$5 WHERE id=$6 RETURNING *", [comment.user_id, comment.message_id, comment.date, comment.time, comment.comment, id])
            return updatedComment
    } catch (error) {
        return error
    }
}

const deleteComment = async (id) => {
    try {
        const deletedComment = await db.one(" DELETE FROM comments WHERE id=$1 RETURNING *", id)
        return deletedComment
    } catch (error) {
        return error
    }
}


module.exports = {
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
}