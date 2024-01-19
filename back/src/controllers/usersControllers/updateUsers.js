const { User } = require('../../dataBase');

const updateUser = async (id, newData) => {
    try {
        const userToUpdate = await User.findByPk(id);

        if (!userToUpdate) {
            throw new Error("Usuario inexistente");
        }

        await userToUpdate.update(newData);
        await userToUpdate.reload();


        return userToUpdate;
    } catch (error) {
        throw new Error('Error al actualizar el usuario');
    }
};

module.exports = updateUser;