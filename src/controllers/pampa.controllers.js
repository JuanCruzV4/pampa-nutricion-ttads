const Cliente = require('../models/cliente');

const renderAbout = (req, res) =>{
    res.render('about.hbs');
};
const renderIndex = (req, res) =>{
    res.render ('index.hbs');
}

const renderCLientes = async (req, res) =>{

    const losClientes = await Cliente.find().lean();
    res.render('clientes.hbs', {clientes:losClientes});

};

const renderCInsert = (req, res) =>{
    res.render('clientesInsert.hbs');
};

const renderCUpdate = async (req, res) =>{
    try{
        const elCliente = await Cliente.findById(req.params.id).lean();
        res.render('clientesUpdate.hbs', {cliente:elCliente});
    }catch (error){
        console.log(error.message);
    }
};

const renderCDelete = async (req, res) =>{
    const{ id } =req.params;
    await Cliente.findByIdAndDelete(id);

    res.redirect("/clientes");
};

const renderCInsertPost = async (req, res) =>{

    try{
        const cli =  Cliente(req.body);
        await cli.save();
        res.redirect("/clientes");
    }catch (error){
        console.log(error);
    }

};

const renderCUpdatePost = async (req, res)=> {

    const {id} = req.params;
    await Cliente.findByIdAndUpdate(id, req.body);
    res.redirect("/");
};

const renderSucursales = (req, res) =>{
    res.render('sucursales.hbs');
};

const renderProveedores = (req, res) =>{
    res.render('proveedores.hbs');
};

const renderTiposMascotas = (req, res) =>{
    res.render('tipomascotas.hbs');
};


module.exports = {renderIndex, renderAbout, renderCLientes, renderCInsert, renderCUpdate, renderSucursales, renderProveedores,
renderCDelete, renderCInsertPost, renderCUpdatePost, renderTiposMascotas};

