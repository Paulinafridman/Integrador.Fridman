const fs = require ('fs');

let dbConcesionaria=JSON.parse(fs.readFileSync("./data/concesionaria.json","utf-8"))

const home ={
   index:(req,res)=>{
    res.set({'content-type':'text/plain;charset=utf-8'})

    res.write("BIENVENIDXS A NUESTRO CENTRO DE SUCURSALES");
    res.write('\n')
    res.write('\n\n\nSUCURSALES DISPONIBLES:')
    res.write('\n')
    dbConcesionaria.forEach((sucursales)=>{
      res.write('\n')
          res.write(sucursales.sucursal) 
         
       })
        res.end()
    
    },
    

}

module.exports = home