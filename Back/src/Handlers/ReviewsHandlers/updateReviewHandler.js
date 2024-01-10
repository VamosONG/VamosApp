const updateReview=require('../Controllers/reviewsController/updateReview');

module.exports=async(req,res)=>{
    const {id,user,chofer,stars,message}=req.body;
    try {
        const updRev=await updateReview(id,user,chofer,stars,message);
    
        res.status(200).json(updRev);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}