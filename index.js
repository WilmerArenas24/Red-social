//Importar dependencias
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

//Mensaje de bienvenoda
console.log("Api Node para red social inicada!!")

//Conexion a la DB
connection();

//Crear servidor node
const app = express();
const puerto = 3900;


//Configurar el cors
app.use(cors());

//Convertir los datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Cargar conf rutas
const UserRoutes = require('./routes/user');
const PublicationRoutes = require("./routes/publication");
const FollowPublication = require("./routes/follow");

app.use("/api",UserRoutes);
app.use("/api",PublicationRoutes);
app.use("/api",FollowPublication);


// Ruta de pprueba
app.get("/ruta-prueba",(req,res)=>{
    return res.status(200).json(
        {
            'id':1,
            'nombre': 'Wilmer',
            'web': "wilmerdev@wilmer.es"
        }
    )
})
// Posenr al servidor a escuchar peticiones https

app.listen(puerto, ()=>{
    console.log("Servidor de node corrienso en el puerto", puerto)
})
