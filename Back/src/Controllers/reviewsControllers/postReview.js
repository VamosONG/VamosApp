const postReview = async (userId, driverId, date, qualification, comments, stateOfTrip) => {
    try {
        
        if (stateOfTrip !== 'reserved') {
            throw new Error('No puedes dejar una revisión en este momento.');
        }

        const [reviewPost, created] = await Review.findOrCreate({
            where: {
                userId: userId,
                driverId: driverId,
            },
            defaults: {
                userId,
                driverId,
                date,
                qualification,
                comments,
            },
        });

        if (!created) {
            throw new Error('Ya existe una reseña del usuario para el mismo chofer en la base de datos.');
        }

        const user = await User.findByPk(userId);
        const driver = await Driver.findByPk(driverId);

        if (user && driver) {
            await user.addReview(reviewPost);
            await driver.addReview(reviewPost);
        } else {
            console.error('No se encontró el usuario o el conductor.');
        }

        return reviewPost;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = postReview;