const { v4 } = require("uuid");


class Banda{

   constructor(name='sin nombre'){
    this.name=name;
    this.votos=0;
    this.id=v4();

   } 

}

class puertos{
   constructor(name='puerto sin nombre'){
      this.name=name;
      this.estado=0;
      this.id=v4();
   }

}



module.exports = Banda;
module.exports = puertos;

