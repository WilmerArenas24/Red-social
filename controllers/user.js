//Acciones de prueba
const pruebaUser = (req, res) => {
    res.status(200).json({
        message: "Mensaje enviado desde: controllers/user.js"
    });
};

//Exportar acciones
module.exports = {
    pruebaUser 
};