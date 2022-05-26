const {
User,
existeUsuario, 
verificarRoles
} = require('../models/User');
var bcrypt = require("bcryptjs");

exports.registrarUsuario = async (req, res)=>{
    
    const { username, email, password, roles } = req.body;
    
    if(!(username !== '' && password !== '' && email !== '')){
        res.status(400).json({ msg: 'Hubo un error al procesar los datos' });
    }   
    
    const isUsuario = await existeUsuario(username, email);
    const isRoles = verificarRoles(roles);
    
    if(isUsuario){
        res.json({ msg: 'El usuario ya se encuentra registrado' });
    }else if(isRoles){
        try {
            let passwordHash = bcrypt.hashSync(password,8)
            User.create({ username, email, password: passwordHash });
            res.json({ msg: 'Usuario Registrado...' });
        } catch (error) {
            res.json({ msg: 'Hubo un error al realizar el registro' });
        }
    }else{
        res.json({ msg: 'Hubo un error en los roles enviados' })
    }
}