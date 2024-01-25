const updateUserAdminControllers = require("../../controllers/usersControllers/updateUserAdminControllers");


const updateUserAdminHandler = async (req, res) =>{
    const {id} = req.params;

    try {
        const response  = await updateUserAdminControllers(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({message: 'Error en handle de updateAdmin' , error})
    }
 }

 module.exports = updateUserAdminHandler