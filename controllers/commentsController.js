const express = require("express")
const comments = express.Router({ mergeParams: true })

const { 
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
} = require("../queries/comments")

// INDEX
comments.get("/", async ( req, res ) => {
    const { messageId } = req.params

    const allComments = await getAllComments(messageId)
    if (allComments){
        res.status(200).json(allComments)
    } else {
        res.status(500).json({ error: "server error"})
    }
})

// SHOW
comments.get("/:id" , async ( req, res ) => {
    const { id } = req.params
    const comment = await getComment(id)
    try {
        res.status(200).json(comment)
    } catch (error) {
        res.status(404).json({ error: "not found" })
    }
})
// CREATE
comments.post('/', async ( req, res ) => {
    const { messageId } = req.params

    try {
    const newComment = await createComment(req.body, messageId)
        res.status(200).json(newComment)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// UPDATE
comments.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updatedComment = await updateComment( id, req.body )
        res.status(200).json(updatedComment)
    } catch (error) {
        res.status(404).json({ error: "comment not found"})
    }
})

// DELETE

comments.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deletedComment = await deleteComment( id )
        res.status(200).json(deletedComment)
    } catch (error) {
        res.status(404).json({ error: "message not found"})
    } 
})

module.exports = comments