const express = require("express")
const users = express.Router({})

const{
    checkPassword,
    checkEmail,
    checkEmailExists,
    register,
    loginFieldCheck
} = require ("../validations/validations")


const {
    getAllUsers,
    createUser
} = require("../queries/users")

// INDEX ROUTE
users.get("/", async ( req, res ) => {
    try {
    const allUsers = await getAllUsers()
    res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({error: "error"})
    }
})

// CREATE ROUTE - register
users.post("/", checkPassword, checkEmail, checkEmailExists, register, async ( req, res ) => {
    try {
        const newUser = await createUser(req.body)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ error: 'route error' })
    }
})

// CREATE ROUTE - login
users.post("/login", loginFieldCheck, async ( req, res ) => {
    try {
        const newUserLogin = await createUser(req.body)
        res.status(200).json(newUserLogin)
    } catch (error) {
        res.status(500).json({ error: 'route error' })
    }
})


module.exports = users