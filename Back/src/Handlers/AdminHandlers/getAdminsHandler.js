const getAdminsController = require('../../Controllers/AdminControllers/getAdminsController');

module.exports=async(req,res)=>{
    try{
        const {name} = req.query;
        const allAdmins=await getAdminsController();
 
        if(name){
            const filtered=await allAdmins?.filter((adm=>adm.name && adm.name.toLowerCase().includes(name.toLowerCase)));
            
            res.status(200).json(filtered);    //Retorna el arreglo tenga elementos o no.
        }
        else
            res.status(200).json(allAdmins);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}