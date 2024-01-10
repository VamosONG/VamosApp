const getAirports = require('../../Controllers/AirportsControllers/getAirports');

module.exports=async(req,res)=>{
    try{
        const {name} = req.query;
        const allAirports=await getAirports();
 
        if(name){
            const filtered=await allAirports?.filter((airp=>airp.name && airp.name.toLowerCase().includes(name.toLowerCase)));
            
            res.status(200).json(filtered);    //Retorna el arreglo tenga elementos o no.
        }
        else
            res.status(200).json(allAirports);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}