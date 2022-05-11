const {Router} = require("express");
const router = Router();
//const Cliente = require('../models/cliente');
const controller = require('../controllers/pampa.controllers');

router.get('/',controller.renderIndex);
router.get('/about', controller.renderAbout);
//   CLIENTE
//     GET
router.get('/clientes', controller.renderCLientes );
router.get('/clientesInsert', controller.renderCInsert);
router.get('/clientesUpdate/:id', controller.renderCUpdate);
router.get('/clientesDelete/:id', controller.renderCDelete);
//     POST
router.post('/cliente/insert', controller.renderCInsertPost);
router.post("/cliente/update/:id", controller.renderCUpdatePost);

//   SUCURSALES
router.get('/sucursales', controller.renderSucursales);
//   PROVEEDORES
router.get('/proveedores', controller.renderProveedores);
//   TIPOSMASCOTAS
router.get('/tiposmascotas', controller.renderTiposMascotas);

module.exports = router;