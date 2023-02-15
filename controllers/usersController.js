const express = require("express")
const users = express.Router({})

const{
    checkPassword,
    checkEmail,
    checkEmailExists,
    register,
    loginFieldCheck,
    login,
} = require ("../validations/validations")


// Function that checks to see if token is present inside of client
const {
    userAuth
} = require ("../validations/auth.js")


const {
    getAllUsers,
    createUser
} = require("../queries/users")

// PROTECTED ROUTE - INDEX ROUTE
users.get("/", userAuth, async ( req, res ) => {
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
users.post("/login", loginFieldCheck, login, async ( req, res ) => {
    try {
        const newUserLogin = await createUser(req.body)
        res.status(200).json(newUserLogin)
    } catch (error) {
        res.status(500).json({ error: 'route error' })
    }
})

// GET ROUTE - logout
users.get("/logout", async ( req, res ) => {
    try {
        return res.status(200).clearCookie('token',{ httpOnly: true }).json({
            success: true,
            message: 'Logged out successfully'
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            error: error.message,
        })   
    }
}
)

// PROTECTED ROUTE  - (needs functionality )
users.get('/protected', userAuth, async ( req, res) => {
    try {
        // const protectedUsers = await getAllUsers()
        res.status(200).json({
            info: 'protected info'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'unauthorized',
            error: error,
        })
    }
})


module.exports = users