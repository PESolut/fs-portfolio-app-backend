const { check } = require('express-validator')
const db = require('../db/dbConfig')

exports.checkEmail = ( req, res, next ) => {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
    next()
} else {
  res.status(422).json({error: 'email must be formatted as an email!'})
}
}

exports.checkPassword = ( req, res, next) => {
  if (req.body.password.length > 6 && req.body.password.length < 20){
    next()
  } else {
    res.status(422).json({error: 'password must be more than 6 characters and less then 20 characters'})
  }
}

exports.checkEmailExists = async ( req, res, next ) => {
  console.log(req.body.email)
  const inputEmail = req.body.email
  try {
    const result = await db.any('SELECT * from users')
    let emailExists = false;

    result.forEach(user => {
      if (user.email === inputEmail) {
        emailExists = true;
      }
    });

    if (emailExists) {
      res.status(422).json({ error: 'Email already exists' });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


// exports.checkEmailExists = ( req, res, next ) => {
//   const inputEmail = req.body.email
//   // const queriedEmail = (async (value) => {
//   //   await db.one('SELECT * from users WHERE email = $1', [value,])
//   //   return queriedEmail
//   // })
//   const getAllUsers = async () => {
//     try {
//       const allUsers = await db.any('SELECT * from users')
//       return allUsers
//     } catch (error) {
//       return error
//     }
//   }
//   allUsers = getAllUsers()

//   // console.log(queriedEmail)
//   console.log(inputEmail)
//   console.log(allUsers[0])
//   next()
// }

exports.defaultDateTime = (req, res, next) => {

    // Automatically set the date and time for post requests to messages table and comments
    req.body.date = new Date().toISOString().slice(0, 10);
    req.body.time = new Date().toLocaleTimeString();
  
    next();
  };