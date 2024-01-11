const { User } = require('../../dataBase');

const deleteAdminController = async (id) => {
    if(!id)
        throw new Error('No se recibió el id para eliminar el administrador.');

const existingAdmin=await User.findOne({
    where:{id: id}
})

if(!existingAdmin)
    throw new Error(`El admin con id ${id} no existe en la base de datos.`);
else{
    await User.update(
        {admin: false},
        {where: {id: id}}
    )
    
    const userNoAdmin=await User.findOne({
        where:{id: id}
    })
    return userNoAdmin;
}
}

module.exports = deleteAdminController;