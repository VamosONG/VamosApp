const {User} = require('../../dataBase')

const deleteLogicUserController = async (id) => {
    try {
        const user = await User.findByPk(id)

        if(!user) {
            throw new Error('No se encontró el chofer con el ID proporcionado.');
        }

        const updateUserBlocked = !user.banned;

        await User.update({
            banned: updateUserBlocked}, {where: {id}}
        )

        return {
            success: true,
            message: 'El usuario se ha actualizado correctamente.',
            newBannedState: updateUserBlocked,
        }
    } catch (error) {
        throw new Error(`Error al actualizar: ${error.message}`);
    }
}

module.exports = deleteLogicUserController