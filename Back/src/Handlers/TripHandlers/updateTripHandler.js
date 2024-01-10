const updateTrip=require('../Controllers/airportsController/updateTrip');

module.exports=async(req,res)=>{
    const {id,date,hour,origin,destination,passengers,price,driver,reviews,stateOfTrip}=req.body;
    try {
        const updTrip=await updateTrip(id,date,hour,origin,destination,passengers,price,driver,reviews,stateOfTrip);
    
        res.status(200).json(updTrip);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}