const getUsers = require('../../controllers/usersControllers/getUsers');

module.exports = async (req, res) => {
    try {

        const { searchInput } = req.body;
       
        let filteredUsers = await getUsers();

        //Filtra por busqueda: nombre, apellido, email, telefono, dni.
        if(searchInput){
            if("admin".includes(searchInput.toLowerCase())){
                filteredUsers = filteredUsers?.filter((user) => user.admin === true);
            }
          

           filteredUsers = filteredUsers.filter(usr =>
            (
              (usr.name && usr.name.toLowerCase().includes(searchInput.toLowerCase())) ||
              (usr.surname && usr.surname.toLowerCase().includes(searchInput.toLowerCase())) ||
              (usr.email && usr.email.toLowerCase().includes(searchInput.toLowerCase())) ||
              (usr.phone && usr.phone.toLowerCase().includes(searchInput.toLowerCase())) ||
              (usr.dni && usr.dni.toLowerCase().includes(searchInput.toLowerCase()))
            )
          );
         }
        
      
            res.status(200).json(filteredUsers);       

    } catch (error) {
        res.status(400).json(`Error al obtener usuarios filtrados: ${error.message}`);
    }
}