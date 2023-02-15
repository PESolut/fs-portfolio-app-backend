const { config } = require('dotenv')
config()

module.exports = {
    CLIENT_URL: process.env.CLIENT_URL,
    SECRET: process.env.SECRET,
}