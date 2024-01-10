const postUser=require('../Controllers/usersControllers/postUser');

module.exports=async(req,res)=>{
    const {name,surname,email,phone,dni}=req.body;
    //Trips,activeReservations y reviews se inician en 0, admin se inicia como false por defecto.
    try {
        const newUser=await postUser(name,surname,email,phone,dni);
    
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}