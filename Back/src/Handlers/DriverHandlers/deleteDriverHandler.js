const deleteDriver= require('../../Controllers/DriversControllers/deleteDriver');

module.exports=async(req,res)=>{
    const {id} = req.params;
    try{
        const deletedDriv=await deleteAirport(id);
 
        if(deletedDriv)
            res.status(200).json(deletedDriv);
        else
            res.status(404).send(`No existe chofer con ID ${id}.`);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}