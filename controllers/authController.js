var jwt = require("jsonwebtoken"); 
var bcrypt = require('bcryptjs');
const { User, consultarUsuario } = require('../models/User');

exports.signIn = async (req, res)=>{
    const { username, password } = req.body;
    if(username === '' || password === ''){ 
        res.json({ msg: 'No se pueden recibir campos vacios...!!' }) 
        return;
    }

    try{
        let data = {}
        const resultado = await consultarUsuario(username);
        if(!resultado){
            res.status(400).json({msg: "Usuario no encontrado,verifica los datos o registrate"});
            return;
        }
        let { id, username : user, password: getPassword,email } = resultado;
        data.id = id;
        data.user = user;
        data.email = email;
        const validarPassword = bcrypt.compareSync(password, getPassword);
        
        console.log({ validarPassword });

        const payload = {
            usuario:{
                id: resultado.id
            }
        }

        let token = await jwt.sign(payload,process.env.SECRET);
        data.token = token;
        validarPassword ? res.json({ msg: data }) : res.json({ msg: 'Password no valido' });
    }catch(error){
        res.status(404).json({ msg: error.message });
    }

}

