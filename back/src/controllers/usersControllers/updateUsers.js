const { User } = require('../../dataBase');

const updateUser = async (id, newData) => {
    try {
        const userToUpdate = await User.findByPk(id);
      
        if (!userToUpdate) {
            throw new Error("Usuario inexistente");
        }
      
        await userToUpdate.update(newData);
        await userToUpdate.reload();

       
        return {
            message: 'Usuario actualizado',
            userToUpdate
        };
    } catch (error) {
        throw new Error(`Error al actualizar usuario: ${error.message}`);
    }
};

module.exports = updateUser;