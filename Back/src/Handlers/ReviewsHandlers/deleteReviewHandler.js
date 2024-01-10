const deleteReview= require('../../Controllers/ReviewsControllers/deleteReview');

module.exports=async(req,res)=>{
    const {id} = req.params;
    try{
        const deletedRev=await deleteReview(id);
 
        if(deletedDriv)
            res.status(200).json(deletedRev);
        else
            res.status(404).send(`No existe reseña con ID ${id}.`);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}