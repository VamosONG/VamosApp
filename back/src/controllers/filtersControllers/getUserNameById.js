const { User } = require('../../dataBase')


const getUserNameById = async (id) => {

    try {
        const usuario = await User.findByPk(id);
        const name = `${usuario.name} ${usuario.surname}.`

        return name;

    } catch (error) {
        throw Error (`Error al obtener el usuario: ${error.message}`)
    }
}

module.exports = getUserNameById;