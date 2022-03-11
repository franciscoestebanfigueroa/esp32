
const {io} = require('../index.js');

io.on('connection', client => {
    console.log('cliente conectado info socket');
    client.on('disconnect', () => { console.log('desconectado...socket ')});
  
  
  
    client.on('mensajex', (payload) => { 
      console.log('escucho data en server',payload) });
 
      client.emit('mensajex',{nombre:'dato de server'})
    }); 
