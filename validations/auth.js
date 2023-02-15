const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy
const { SECRET } = require('../constants');
const db = require('../db/dbConfig');

const options = {
  secretOrKey: SECRET,
  jwtFromRequest: function(req) {
    let token = null;
    if (req && req.headers) {
      token = req.headers.cookie;
      console.log(req.headers.cookie)
      if (token && token.startsWith('token=')) {
        token = token.slice(6, token.length);
        console.log('mutated',token)
      }
    }
    return token;
  }
};

passport.use(new JwtStrategy(options, async (jwtPayload, done) => {
  try {
    const user = await db.oneOrNone(
      'SELECT id, email, name FROM users where id = $1',
      [jwtPayload.id]
    );
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    console.log('Error:', error);
    return done(error, false);
  }
}));

exports.userAuth = passport.authenticate('jwt', { session: false });
