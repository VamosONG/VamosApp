const postAirport=require('../Controllers/airportsController/postAirport');

module.exports=async(req,res)=>{
    const {date,hour,origin,destination,passengers,price,driver}=req.body;
    //Reviews se inicia en 0 y stateOfTrip en "Pending".
    try {
        const newTrip=await postDriver(date,hour,origin,destination,passengers,price,driver);
    
        res.status(200).json(newTrip);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}