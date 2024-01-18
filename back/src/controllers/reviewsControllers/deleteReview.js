const { Review } = require("../../dataBase");

const deleteReview = async (id) => {
    try {
        const reviewDelete = await Review.findByPk(id);

        if (!reviewDelete) {
            throw new Error("La review que esta intentando eliminar no existe")
        }

        await reviewDelete.destroy();

        return reviewDelete;
    } catch (error) {
        throw new Error({ error: error.message })
    }
}

module.exports = deleteReview;