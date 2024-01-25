const { User } = require('../../dataBase');

const updateUserAdminControllers = async (id) => {
    const userFind = await User.findByPk(id)
    if(!userFind) {
        throw new Error({
            message: 'Error, el usuario no se encuentra en la DB '
        })
    }

    const changeValue = !userFind.admin;

    await User.update({ admin: changeValue}, { where: { id } });

        return {
            success: true,
            message: 'El usuario se ha actualizado correctamente.'
        }
}

module.exports = updateUserAdminControllers