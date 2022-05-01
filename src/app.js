//import express from "express";
//import indexRoutes from './routes/index.routes';

const express = require('express');
const expressHbs = require ('express-handlebars');
const indexRoutes = require('./routes/index.routes');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('views', path.join(__dirname, 'views')); /*Aqui defino donde buscar las vistas *//*__direname se usa para poner una direccion completa*/
app.engine(
    '.hbs',
    expressHbs.engine( {

        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"),"layouts"),
        partialsDir: path.join(app.get("views"),"partials"),

})
);        /*En lugar de archivos HTML uno Hbs*/

app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(indexRoutes);

module.exports = app;