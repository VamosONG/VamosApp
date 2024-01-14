
const { Driver, Review } = require('../../dataBase')


const getDrivers = async () => {

    try {
        const allDrivers = await Driver.findAll({
        include: [{
            model: Review,
            attributes: ['id', 'userId', 'date', 'qualification', 'comments'],
        }]
        });

        return allDrivers;

    } catch (error) {
        throw Error (`Error al obtener los conductores: ${error.message}`)
    }
}

module.exports = getDrivers;