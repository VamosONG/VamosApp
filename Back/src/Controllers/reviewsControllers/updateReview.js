const { Review } = require("../../dataBase");


const updateReview = async (id, newData) => {
    try {
        const reviewUpdate = await Review.findByPk(id);

        if (!reviewUpdate) {
            return null; 
        }

        await reviewUpdate.update(newData);
        await reviewUpdate.reload();

        return reviewUpdate;
    } catch (error) {
        throw new Error('Error al actualizar la reseña');
    }
};

module.exports = updateReview;