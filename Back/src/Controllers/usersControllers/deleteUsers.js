const { User } = require("../../dataBase")

const deleteUser = async (id) => {
    try {
          const userDelete = await User.findByPk(id);

          if(!userDelete){
            throw new Error("Usuario inexistente")
          }

          await userDelete.destroy();

          return userDelete
    } catch (error) {
        throw new Error( error.message );
    }
}

module.exports =  deleteUser;
