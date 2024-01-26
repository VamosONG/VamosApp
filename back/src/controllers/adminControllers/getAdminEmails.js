const getAdmins = require('./getAdminsController');

module.exports=async()=>{       
        try {
                const admins= await getAdmins();

                const correos=admins?.map(adm=>adm.email);
        
                return correos;    
                
        } catch (error) {
                throw new Error(`Error al obtener email de admins: ${error.message}`)
        }            
}