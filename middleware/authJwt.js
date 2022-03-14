const jwt = require("jsonwebtoken");
// const config = require("../config/auth.config.js");
// const db = require("../models");
// const User = db.user;
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  try {
    const verificado = jwt.verify(token, process.env.SECRET)
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// isAdmin = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "admin") {
//           next();
//           return;
//         }
//       }
//       res.status(403).send({
//         message: "Require Admin Role!"
//       });
//       return;
//     });
//   });
// };
// isDeveloper = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "developer") {
//           next();
//           return;
//         }
//       }
//       res.status(403).send({
//         message: "Require Developer Role!"
//       });
//     });
//   });
// };
// isTester = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "tester") {
//           next();
//           return;
//         }
//       }
//       res.status(403).send({
//         message: "Require Tester Role!"
//       });
//     });
//   });
// };
const authJwt = {
  verifyToken: verifyToken,
  // isAdmin: isAdmin,
  // isDeveloper: isDeveloper,
  // isTester: isTester
};
module.exports = authJwt;