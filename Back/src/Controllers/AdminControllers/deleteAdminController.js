const { User } = require('../../dataBase');

const deleteAdminController = async (id) => {
    if(!id)
        throw new Error('No se recibió el id para eliminar el administrador.');

const existingAdmin=await User.findByPk(id);

if(!existingAdmin)
    throw new Error(`El admin con id ${id} no existe en la base de datos.`);
else{
    await User.update(
        {admin: false},
        {where: {id: id}}
    )
    
    const userNoAdmin=await User.findByPk(id);
    return userNoAdmin;
}
}

module.exports = deleteAdminController;