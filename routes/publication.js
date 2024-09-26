const express = require("express");
const router = express.Router();
const PublicationController = require("../controllers/publication");

//Definir las rutas
router.get("/puebaPublication", PublicationController.pruebaPublication);

//Exportar el router
module.exports = router;