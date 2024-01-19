const { User, Trip, Review, Driver } = require('../../dataBase');
const getPendingTrips = require('../../handlers/filtersHandlers/getTripsPendingHandler');

const postReview = async (userId, driverId, date, qualification, comments, tripId) => {
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            throw new Error('Usuario no encontrado.');
        }

        const pendingTrips = await getPendingTrips();

        if (pendingTrips.length === 0) {
            throw new Error('No tienes un viaje pendiente para dejar una reseña.');
        }

        const trip = await Trip.findByPk(tripId);

        if (!trip) {
            throw new Error('No se encontró el viaje asociado a la revisión.');
        }

        if (trip.stateOfTrip !== 'pending') {
            throw new Error('No puedes dejar una revisión en este momento.');
        }

        const [reviewPost, created] = await Review.findOrCreate({
            where: {
                userId: userId,
                driverId: driverId,
                tripId: tripId,
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