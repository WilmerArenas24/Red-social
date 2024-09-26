const express = require("express");
const router = express.Router();
const FollowController = require("../controllers/follow");

//Definir las rutas
router.get("/puebaFollow", FollowController.pruebaFollows);

//Exportar el router
module.exports = router;