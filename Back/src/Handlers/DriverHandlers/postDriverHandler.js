const postAirport=require('../Controllers/airportsController/postAirport');

module.exports=async(req,res)=>{
    const {name,surname,car,phone,capacityPassengers}=req.body;
    //Trips y reviews se inician en 0.
    try {
        const newDriver=await postDriver(name,surname,car,phone,capacityPassengers);
    
        res.status(200).json(newDriver);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}