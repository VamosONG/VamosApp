const getUsers = require('../../Controllers/usersControllers/getUsers');

module.exports=async(req,res)=>{
    try{
        const {name} = req.query;
        const {surname} = req.query;
        const {dni} = req.query;
        const {email} = req.query;

        const allUsers=await getUsers();
 
        if(name){
            const filtered=await allUsers?.filter((user=>user.name && user.name.toLowerCase().includes(name.toLowerCase())));
            res.status(200).json(filtered);    //Retorna el arreglo tenga elementos o no.
        }
        else{
            if(surname){
                const filtered=await allUsers?.filter((user=>user.surname && user.surname.toLowerCase().includes(surname.toLowerCase())));               
                res.status(200).json(filtered);    //Retorna el arreglo tenga elementos o no.
            }
            else{
                if(dni){
                    const filtered=await allUsers?.filter((user=>user.dni && user.dni.toLowerCase().includes(dni.toLowerCase())));
                    res.status(200).json(filtered);    //Retorna el arreglo tenga elementos o no.
                }
                else{
                    if(email){
                        const filtered=await allUsers?.filter((user=>user.email && user.email.toLowerCase().includes(email.toLowerCase())));
                        res.status(200).json(filtered);    //Retorna el arreglo tenga elementos o no.
                    }
                    else
                        res.status(200).json(allUsers);
                }
            }
        }
    }catch(error){
        res.status(400).json({error: error.message});
    }
}