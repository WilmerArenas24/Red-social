//Acciones de prueba
const pruebaFollows = (req, res) => {
    res.status(200).json({
        message: "Mensaje enviado desde: controllers/follow.js"
    });
};

//Exportar acciones
module.exports = {
    pruebaFollows 
};