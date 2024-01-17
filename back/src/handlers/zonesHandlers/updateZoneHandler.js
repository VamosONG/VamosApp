const updateZone=require('../../controllers/zonesControllers/updateZone');

module.exports=async(req,res)=>{
    const {id,name}=req.body;
    try {
        const updZone=await updateZone(id,name);
    
        res.status(200).json(updZone);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}