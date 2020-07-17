let fs= require ('fs')
let dbMarcas =JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))


const marcasController ={
    index: function(req,res){
        res.set({
            'consent-type':'text/plain;charset=utf-8'
        })        
        res.write('Nuestras marcas: ')
            let array=[];
            dbMarcas.forEach(function(concesionaria){
                concesionaria.autos.forEach(function(auto){
                if(!array.includes(auto.marca)){
                    array.push(auto.marca)
                }
                
            })
            
        })
            res.write('--MODELOS DE VEHICULOS--' )
            res.write('\n')
            array.forEach(function(arrays){
                res.write('Marca:' + arrays + '\n' )
            
            
          })  
          
            res.end()
        
        
      },
    
     

      
     id: function (req, res){
        res.set({
            'content.type': 'text/plain;charset=utf-8'
        });
        let idMarcas = req.params.marca
        dbMarcas.forEach(function(sucursal){
            res.write('Autos: ')
            res.write(idMarcas)
            sucursal.autos.forEach(function(auto){

    
            })
            if(sucursal.marca == idMarca){
                res.write (' Marc de vehiculos: '+ sucursal.marca + '\n' +
                sucursal.modelo+ '\n' + sucursal.anio + '\n' + sucursal.sucursal)
            }
        })
    
        res.end()
     }
       
    
     



}





module.exports = marcasController 