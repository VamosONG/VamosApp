const { Review } = require("../../dataBase");


const updateReview = async (id, newData) => {
    try {
        const reviewUpdate = await Review.findByPk(id);

        if (!reviewUpdate) {
            throw new Error(`La reseña con id ${id} no se encuentra en la base de datos.`); 
        }

        await reviewUpdate.update(newData);
        await reviewUpdate.reload();

        return reviewUpdate;
    } catch (error) {
        throw new Error(`Error al actualizar la reseña: ${error.message}`);
    }
};

module.exports = updateReview;