
const {io} = require('../index.js');
const ListaBandas = require('../models/bandas.js');
const Banda = require('../models/model_bandas.js');

var listaBandas = new ListaBandas();
      listaBandas.agregarBanda(new Banda('Pancho'));
      listaBandas.agregarBanda(new Banda('Caro'));
      listaBandas.agregarBanda(new Banda('Estaban'));
      listaBandas.agregarBanda(new Banda('Larita'));
     

 


io.on('connection', client => {
    console.log('cliente conectado info socket');
    client.on('disconnect', () => { console.log('desconectado...socket ')});
  
  
  
    client.on('mensajex', (payload) => { 
      console.log('escucho data en server',payload);
      client.broadcast.emit('mensajex',payload); 
      
    
    
    });
 
      client.emit('mensajex','datos de server');
      
      
    
      
      client.emit('datos',listaBandas);
      client.on('votacion',function(payload){

        console.log(payload['id']);
        listaBandas.votar(payload['id']);
        io.emit('datos',listaBandas);
      });
      
      
      client.on('nuevaBanda',function(data){
        listaBandas.agregarBanda(new Banda(data['name']));
        io.emit('datos',listaBandas);
        
      });
      
      client.on('eliminarBanda',function(data){
        console.clear();
        console.log(data['id']);
        listaBandas.eliminarBanda(data['id']);
        io.emit('datos',listaBandas);
        
        //console.table(listaBandas.getBandas());
  
});


    }); 





