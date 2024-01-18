const { Driver } = require('../../dataBase')


const getDriverNameById = async (id) => {

    try {
        const chofer = await Driver.findByPk(id);
        const name = `${chofer.name} ${chofer.surname}.`

        return name;

    } catch (error) {
        throw Error (`Error al obtener el chofer: ${error.message}`)
    }
}

module.exports = getDriverNameById;