//Archivo que trabajará la lógica de la entidad Usuario.

const Sequelize = require('sequelize');
const db = require("../config/db");
const { ROLES } = require('./Rol'); 
const User = db.define('usuarios', {
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

User.sync()
  .then( response =>{
    console.log('Se ah creado la tabla usuarios correctamente');
  }).catch(error=>{  
    console.log(error.message);
  });

const consultarEmail = async (email) =>{
  try {
    return await User.findOne({ where: { email } });
  } catch (error) {
    console.log(error0);
  }
}

const consultarUsuario = async (username)=>{
  try {
    return await User.findOne({ where: { username } });
  } catch (error) {
    console.log(error);
  }
}

const verificarRoles = (roles)=>{
  const validacion = roles.map( item=> ROLES.includes(item));
  return !validacion.includes(false);
}

const existeUsuario = async (username, email )=>{
  try {
    const existeUsuario = Boolean(await consultarUsuario(username));
    const existeEmail = Boolean(await consultarEmail(email));
    return Boolean(existeUsuario + existeEmail);
  } catch (error) {
    console.log(error);    
  }
}

module.exports = {
  User,
  consultarUsuario,
  existeUsuario,
  verificarRoles
};