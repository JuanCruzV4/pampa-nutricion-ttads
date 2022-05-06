const {Router} = require("express");
const router = Router();
const Cliente = require('../models/cliente');


router.get('/', (req, res) =>{
    res.render ('index.hbs');
});

router.get('/about', (req, res) =>{
    res.render('about.hbs');
});

//CLIENTE
//GET
router.get('/clientes', async (req, res) =>{

    const losClientes = await Cliente.find().lean();

    res.render('clientes.hbs', {clientes:losClientes});
});
router.get('/clientesInsert', (req, res) =>{
    res.render('clientesInsert.hbs');
});

router.get('/clientesUpdate/:id', async (req, res) =>{
    try{
          const elCliente = await Cliente.findById(req.params.id).lean();
          res.render('clientesUpdate.hbs', {cliente:elCliente});
    }catch (error){
     console.log(error.message);
    }
});

//POST
router.post('/cliente/insert', async (req, res) =>{

    try{
        const cli =  Cliente(req.body);
        await cli.save();
        res.redirect("/clientes");
    }catch (error){
        console.log(error);
    }

});

router.post("/cliente/update/:id", async (req, res)=> {

    //console.log(req.body);
    //res.send("recived");
    const {id} = req.params;
    await Cliente.findByIdAndUpdate(id, req.body);
    res.redirect("/");
})
router.get('/sucursales', (req, res) =>{
    res.render('sucursales.hbs');
});

router.get('/proveedores', (req, res) =>{
    res.render('proveedores.hbs');
});

router.get('/tiposmascotas', (req, res) =>{
    res.render('tipomascotas.hbs');
});



module.exports = router;