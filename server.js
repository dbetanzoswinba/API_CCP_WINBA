require('dotenv').config();
const express = require("express");
const cors = require("cors");

//models
const { Role } = require('./models/Rol.js');
const { Usuario } = require('./models/User.js');
const User_Rol = require('./models/User_Rol');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to GLWINBA API." });
});

app.use('/api/usuarios',require('./routes/usuariosRoutes'));
app.use('/api/auth',require('./routes/authRoutes'));
app.use('/api/CFDI',require('./routes/cfdiRoutes'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});