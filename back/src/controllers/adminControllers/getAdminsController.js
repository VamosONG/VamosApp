const getUsers=require('../usersControllers/getUsers');

module.exports=async()=>{       
        try {
                const users= await getUsers();

                const admins=users?.filter(usr=>usr.admin===true);
        
                return admins;    
                
        } catch (error) {
                throw new Error(`Error al filtrar admins: ${error.message}`)
        }            
}