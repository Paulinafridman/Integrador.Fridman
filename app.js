const express = require('express');
const app = express();


//<---rutas requeridas---->
/*const rutaAutos =require ('./routes/autos');*/
const rutaHome = require ('./routes/home');
const rutaMarcas= require('./routes/marcas');
const rutaSucursales = require('./routes/sucursales');
//---levantondo servidor----
app.listen(3030, ()=> console.log('El servidor esta funcionando en el puerto 3030'))

//---llamando metodos de express----
app.use('/',rutaHome);
//app.use('/autos', rutaAutos);
app.use('/marcas', rutaMarcas);
app.use('/sucursales', rutaSucursales);