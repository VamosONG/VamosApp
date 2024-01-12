const {Airport} = require('../../dataBase')
const { Op } = require('sequelize');

const updateAirport = async (id, newName) => {

    try {
          const updateAir = await Airport.findOne({ where: { id: id } });

          if (!updateAir) {
            throw new Error(`An airport ${id} dont exists.`); 
        }

          if (!newName) {
            throw new Error('Need a name');
        }
        updateAir.name= newName;
        await updateAir.save();

        return { message: 'Airport update successful' };
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {updateAirport}