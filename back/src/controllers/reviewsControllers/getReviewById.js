const { Review } = require('../../dataBase'); 


const getReviewById = async (id) => {
    
    try {
        const review = await Review.findByPk(id);


        if (!review) {
            throw new Error(`Error, no existe review asociada al id ${id} en BD.`)
        }

        return review;
    } catch (error) {
        throw new Error(`Error al obtener review: ${error.message}`)
    }
};

module.exports = {
    getReviewById ,
};