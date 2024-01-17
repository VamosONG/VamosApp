const postZone=require('../../controllers/zonesControllers/postZone');

module.exports=async(req,res)=>{
    const {name}=req.body;
    try {
        const newZone=await postZone(name);
    
        res.status(200).json(newZone);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}