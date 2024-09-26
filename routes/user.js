const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

//Definir las rutas
router.get("/puebaUsuario", UserController.pruebaUser);

//Exportar el router
module.exports = router;