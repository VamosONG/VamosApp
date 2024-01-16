const getUsers=require('../usersControllers/getUsers');

module.exports=async()=>{
            
        const users= await getUsers();
        const admins=users.filter(usr=>{usr.admin===true});

        return admins;    
}