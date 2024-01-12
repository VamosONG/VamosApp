const deleteUser= require('../../Controllers/usersControllers/deleteUsers');

module.exports=async(req,res)=>{
    const {id} = req.params;
    try{
        const deletedUs=await deleteUser(id);
 
        if(deletedUs)
            res.status(200).json(deletedUs);
        else
            res.status(404).send(`No existe usuario con ID ${id}.`);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}