//Archivo que trabajará la lógica de la entidad Rol.

const Sequelize = require('sequelize');
const db = require("../config/db.js");

const ROLES = ["user", "admin", "developer", "tester"];
const Role = db.define("roles", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  }
});

const tablaRoles = Role.sync({ force : true })
  .then(()=>{
    ROLES.forEach(async (role) => {
      try{
        Role.create({
          name:role,
        });
      }catch(error){
        console.log(error.message);
      }
    });
    console.log('Se han insertado los valores en Roles de manera correcta');
  }).catch(error=>{
    console.log(error.message);
  })

module.exports = {
  Role,
  ROLES
}