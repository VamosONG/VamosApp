const { Review, User } = require('../../dataBase')

const getReviews = async () => {

    try {
        const reviews = await Review.findAll({
            include: [
                {
                    model: User, // Utiliza el modelo User definido en tu sequelize instance
                    as: 'User', // Alias definido en tu asociación
                    attributes: ['name'],
                },
            ],
        });
        //DEVUELVE EL OBJ CON DATOS DEL USUARIO --- FALTA UNA IMG PARA LA REFERENCIA VISUAL
        const transformedReviews = reviews.map((review) => ({
            id: review.id,
            userId: review.userId,
            driverId: review.driverId,
            date: review.date,
            qualification: review.qualification,
            comments: review.comments,
            userName: review.User ? review.User.name : null, // Utiliza el alias User
        }));

        return transformedReviews;
    } catch (error) {
        throw new Error(`Error al obtener reseñas: ${error.message}`)
    }
}

module.exports = getReviews;