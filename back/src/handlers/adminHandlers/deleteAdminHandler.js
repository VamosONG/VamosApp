const deleteAdminController = require('../../Controllers/AdminControllers/deleteAdminController');

module.exports=async(req,res)=>{
    const {id} = req.params;
    try{
        const deletedAdmin=await deleteAdminController(id);
 
        if(deletedAdmin)
            res.status(200).json(deletedAdmin);
        else
            res.status(404).send(`No existe administrador con ID ${id}.`);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}