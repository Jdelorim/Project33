const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../models/user");

passport.serializeUser((user, done) => {
    console.log(`serializedUserCalled ${user}`);
    done(null, {_id: user.id})
});

passport.deserializeUser((id, done) => {
    console.log('deserialized user called');
    User.findOne(
        {_id: id},
        "username",
        (err, user) => {
        done(null, user)
        }
    )
})

passport.use(LocalStrategy);

module.exports = passport;