const { zone } = require('../../dataBase');

module.exports=async()=>{
            
        const zones= await zone.findAll();
       
        return zones;    
}
