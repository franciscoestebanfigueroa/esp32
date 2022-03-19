const Banda = require("./model_bandas");

class ListaBandas{


    constructor (){
        this.bandas=[];
    }
    
    
    agregarBanda(banda = new Banda){
        
        this.bandas.push(banda);
    }
    
    getBandas(){
        
        return this.bandas;
    }
    
    eliminarBanda(id=''){
        console.log('dato eliminar', id );
    this.bandas=this.bandas.filter(elim=>elim.id !==id);
    }
    
    votar(id){
    this.bandas=this.bandas.map(x=>{
    if(x.id===id){
        x.votos++;
        return x;
    }
    else{
        return x;
    }
    
    });
    
    }
    
    }
    
    module.exports=ListaBandas;