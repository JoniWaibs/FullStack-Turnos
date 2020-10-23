const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require('./Router/Router')
const bodyParser = require('body-parser')//Para capturar datos de form en json()
const cors = require('cors');



//habilitar cors
// const whitelist = ['http://localhost:3000']
// const corsOptions = {
//   origin: (origin , callback)=>{
//     const existe = whitelist.some(dominio => dominio === origin);
//     if ( existe ){
//       callback(null , true)
//     } else {
//        callback(new Error('No permitido por cors'))
//     }
//   }
// }
// app.use(cors(corsOptions))
app.use(cors())

//Puerto de conexion al servidor
const PORT = 4000;

//Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/pacientes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Connect"); //ddbb conectada
  });

//Habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))//Se habilita


//Configurar middleware para routing
app.use('/', router)  

app.listen(PORT, () => console.log("Server OK"))//Servidor corriendo




