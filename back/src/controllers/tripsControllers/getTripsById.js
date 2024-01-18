const { Trip } = require('../../dataBase');

const getTripsById = async (id) => {
    try {
        const tripDB = await Trip.findByPk(id);

        if (!tripDB) {
            throw new Error("Viaje no encontrado en la base de datos");
        }

        return tripDB;
    } catch (error) {
        console.error("Error en getTripById:", error.message);
        throw new Error("Error al obtener información del viaje");
    }
};

module.exports = { getTripsById };