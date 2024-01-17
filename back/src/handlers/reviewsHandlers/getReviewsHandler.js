const getReviews = require('../../controllers/reviewsControllers/getReviews');

module.exports=async(req,res)=>{
    try{
        const { driverId } = req.body;
        
        let allReviews=await getReviews();
 
        //Si se recibe un id de conductor, se retornan las reviews de este chofer.
        if(driverId)
            allReviews=allReviews?.filter(rev=>rev.driverId===driverId);

        res.status(200).json(allReviews);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}