
const { Driver } = require('../../dataBase')


const getDrivers = async () => {

    try {
        const allDrivers = await Driver.findAll()
        return allDrivers;

    } catch (error) {
        throw Error (`Error al obtener los conductores: ${error.message}`)
    }
}

module.exports = getDrivers;