const fs= require ('fs');
const db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

//listar sucursales--direccion y telefono
//sucursales/:sucursal---informacion de la sucursal: nombre, direccion, telefono, todos los vehiculos(marca, modelo año y cantidad total de autos)
const sucursalesController = {
    index: (req,res)=>{
        res.set({
            'content-type':'text/plain;charset=utf-8'
        })
        res.write('SUCURSALES')
        db.forEach(function(sucursales){
            res.write(sucursales.sucursal)
            res.write('\n')
            res.write(sucursales.direccion)
            res.write('\n')
            res.write(sucursales.telefono)
            res.write('\n')
        })

        res.end()


        
    },
       // infoSucursales: todo el objeto

         id: function(req,res){
           //res.set({'content-type':'text/plain;charset=utf-8'})
           let idSucursales = req.params.sucursal
           db.forEach(function(elemento){
               if (elemento.sucursal == idSucursales){
                   res.write('Bienvenido/a a la sucursal' + elemento. sucursal)
                   res.write('\n')
                   res.write('Direccion: ' + elemento.direccion)
                   res.write('\n')
                   res.write('Direccion: ' + elemento.telefono)
                   res.write('\n')
                   elemento.autos.forEach(function(auto){
                    res.write('\n')
                    res.write('Marca: ' + auto.marca)
                    res.write('\n')
                    res.write('Modelo: ' + auto.modelo)
                    res.write('\n')
                    res.write('Color: ' + auto.color)
                    res.write('\n')
                    res.write('Anio: ' + auto.anio)
                    res.write('\n\n')
                   })
               }
               res.end()
            })
                res.send()

       },

}

module.exports = sucursalesController
