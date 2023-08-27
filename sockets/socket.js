
const {io} = require('../index.js');
const ListaBandas = require('../models/bandas.js');
const Banda = require('../models/model_bandas.js');
var puerto2=0;
var listaBandas = new ListaBandas();
      listaBandas.agregarBanda(new Banda('Pancho'));
      listaBandas.agregarBanda(new Banda('Caro'));
      listaBandas.agregarBanda(new Banda('Estaban'));
      listaBandas.agregarBanda(new Banda('Larita'));

var datapuerto=process.env.PORT;

 


io.on('connection', client => {
    console.log('cliente conectado info socket');
    client.on('disconnect', () => { console.log('desconectado...socket ')});
  
      client.on('estado-puerto',(payload)=>{
        console.log('estado del puerto 2 ',payload);
        client.emit('estado-puerto',(payload)=>{
           if(payload==0){puerto2=1}
           else{puerto2=0}; 
        });
      });
  
      client.on('mensajex', (payload) => { 
      console.log('escucho data en server',payload);
      client.broadcast.emit('mensajex',payload); 
          
    });
    client.emit('puerto',puerto2);
 
      client.emit('mensajex','datos de server');
              
      client.emit('datos',listaBandas);
      client.emit('puerto',datapuerto);
      
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





