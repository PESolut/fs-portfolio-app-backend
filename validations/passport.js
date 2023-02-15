// const passport = require('passport')
// const JwtStrategy = require('passport-jwt').Strategy
// const ExtractJwt = require('passport-jtw').ExtractJwt
// const { SECRET } = require('../constants')
// const db = require('../db/dbConfig')

// const cookieExtractor = function (req) {
//     let token = null
//     if (req && req.cookies) token = req.cookies['token']
//     return token
// }

// const opts = {
//     secretOrKey: SECRET,
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
// }

// // passport.use(
// //     new JwtStrategy(opts, async ({ id }, done) => {
// //         try {
// //             const { rows } = await db.one(
// //                 'SELECT id, email FROM users where id= $1',
// //                 [id]
// //             )
// //             console.log (rows)
// //             if (!rows.length) {
// //                 throw new Error('401 not authorized')
// //             }
// //             let user = { id: rows[0].id, email: rows[0].email, name: rows[0].name}

// //             return await done(null, user)
// //         } catch (error) {
// //             console.log(error.message)
// //             done(null,false)
// //         }
// //     })
// // )