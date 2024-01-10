const getReviews = require('../../Controllers/ReviewsControllers/getReviews');

module.exports=async(req,res)=>{
    try{
        const allReviews=await getReviews();
 
        res.status(200).json(allReviews);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}