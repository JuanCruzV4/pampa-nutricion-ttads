const app = require('./app');
require ('./database');
//import app from "./app";

app.listen(3000);
console.log('Server on port',3000);
