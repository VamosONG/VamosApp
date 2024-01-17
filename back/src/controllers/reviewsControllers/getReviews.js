const { Review } = require('../../dataBase')

const getReviews = async () => {

    try {
        const reviews= await Review.findAll();

        return reviews;
    } catch (error) {
        throw new Error(`Error al obtener reseñas: ${error.message}`)
    }
}

module.exports = getReviews;