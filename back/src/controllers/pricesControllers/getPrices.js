const { Price } = require('../../dataBase');

module.exports=async()=>{
            
        const allPrices= await Price.findAll();
       
        return allPrices;    
}