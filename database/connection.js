const mongoose = require("mongoose");
//Funcion asincrona 
const connection = async()=>{
    try {
        //String de conexion a mogodb
        await mongoose.connect("mongodb+srv://wilmerarenas24:PAy7JMP3rGj4uujj@cluster0.fol9jtu.mongodb.net/");

        console.log("Conexion correcta a BD!!");
        
    } catch (error) {
        console.log(error);
        throw new Error("No se ha logrado conectar a la base de datos !!");
    }


}

module.exports = connection
