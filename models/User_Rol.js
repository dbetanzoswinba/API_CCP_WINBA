//Archivo que se encarga de crear las asociaciones de las tablas roles y usuarios.

const Sequelize = require('sequelize');
const db = require("../config/db.js");
const { Role } = require('./Rol.js');
const { User } = require('./User.js');

const User_Rol = db.define("user_roles", {});

Role.belongsToMany(User, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId",
  });

User.belongsToMany(Role, {
through: "user_roles",
foreignKey: "userId",
otherKey: "roleId",
});

module.exports = User_Rol;