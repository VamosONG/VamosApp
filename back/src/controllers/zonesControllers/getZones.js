const { Zone } = require('../../dataBase');

module.exports=async()=>{
            
        const zones= await Zone.findAll();
       
        return zones;    
}
