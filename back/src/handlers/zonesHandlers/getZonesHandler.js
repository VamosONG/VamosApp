const getZones = require('../../controllers/zonesControllers/getZones');

module.exports=async(req,res)=>{
    try{
        const {name} = req.query;
        const allZones=await getZones();
 
        if(name){
            const filtered=await allZones?.filter((zone=>zone.name && zone.name.toLowerCase().includes(name.toLowerCase)));
            
            res.status(200).json(filtered);    //Retorna el arreglo tenga elementos o no.
        }
        else
            res.status(200).json(allZones);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}