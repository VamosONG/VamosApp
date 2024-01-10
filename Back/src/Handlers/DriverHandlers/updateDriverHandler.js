const updateDriver=require('../Controllers/driverController/updateDriver');

module.exports=async(req,res)=>{
    const {name,surname,car,phone,capacityPassengers,trips,reviews}=req.body;
    try {
        const updDriver=await updateDriver(name,surname,car,phone,capacityPassengers,trips,reviews);
    
        res.status(200).json(updDriver);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}