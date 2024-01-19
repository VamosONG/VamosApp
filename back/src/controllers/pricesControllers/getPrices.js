const { Price } = require('../../dataBase');

module.exports=async(airport, zone)=>{
            
        const allPrices= await Price.findAll();

        if(airport && zone){                                                                                                                                                                                                                                               
                const filtered=await allPrices?.filter(pr=>
                        (pr.airport.toLowerCase()===airport.toLowerCase()) && 
                        (pr.zone.toLowerCase()===zone.toLowerCase()));
                
                if(filtered)                
                        return filtered;             
                else    
                        throw Error(`Error, no se encontro precio con la informacion enviada.`)
        }           
        return allPrices;    
}