const { User } = require('../../dataBase');

const updateUser = async (id, newData) => {
    try {
        const userToUpdate = await User.findByPk(id);
        console.log('1 ' , newData);
        if (!userToUpdate) {
            throw new Error("Usuario inexistente");
        }
        console.log('2 ' , newData);
        await userToUpdate.update(newData);
        await userToUpdate.reload();

        console.log(userToUpdate);
        return {
            message: 'Usuario actualizado',
            userToUpdate
        };
    } catch (error) {
        throw new Error(`Error al actualizar usuario: ${error.message}`);
    }
};

module.exports = updateUser;