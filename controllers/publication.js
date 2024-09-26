//Acciones de prueba
const pruebaPublication = (req, res) => {
    res.status(200).json({
        message: "Mensaje enviado desde: controllers/publication.js"
    });
};

//Exportar acciones
module.exports = {
    pruebaPublication 
};