
// const User = require("../models/user");
// const passport = require("../passport");


// module.exports = (app) => {
// app.post("/api/signup", (req,res) => {
//     console.log("user signup");
    
//     const{username, email, password} = req.body;

//     User.findOne({ username: username}, (err, user) => {
//         console.log("in the db!");
//         if(err) {
//             console.log(`err with username ${err}`);
//         } else if (user) {
//             res.json({
//                 error: `Sorry ${username} is already taken`
//             })
//         }
//         else {
//             const newUser = new User({
//                 username: username,
//                 email: email,
//                 password: password
//             })
//             newUser.save((err, savedUser)=>{
//                 if(err) return res.json(err);
//                 res.json(savedUser);
//             })
//         }
//     });
// });

// app.post("/api/login",
//     (req,res,next) => {
//         console.log(`Login body: ${req.body}`);
//         next();
//     },
//     passport.authenticate("local"),
//     (req,res) => {
//         console.log("logged in", req.user);
//         var userInfo = {
//             username: req.user.username
//         };
//         res.send(userInfo);
//     }
// )

// app.get("/getuser", (req, res, next) => {
//     console.log(`user: ${req.user}`);
//     if (req.user) {
//         res.json({ user: req.user })
//     } else {
//         res.json({ user: null })
//     }
// });

// app.post("logout", (req, res) => {
//     if(req.user) {
//         req.logout();
//         res.send({
//             msg: "loggin out"
//         });
//     } else {
//         res.send({ msg: "no user to log out"});
//     }
// })

// }

