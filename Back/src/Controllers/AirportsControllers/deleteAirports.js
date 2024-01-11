const {Airport} = require('../../dataBase')
const { Op } = require('sequelize');

const deleteAirport = async (id) => {

    try {
          const delAir = await Airport.destroy({where: {id: id}});

          if (delAir === 0) {
            return null; 
        }

        return { message: 'Airport eliminated successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {deleteAirport}