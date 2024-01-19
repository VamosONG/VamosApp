const postReview = require('../../controllers/reviewsControllers/postReview');

module.exports = async (req, res) => {
    const { userId, driverId, date, qualification, comments, tripId } = req.body;
    console.log(userId, driverId, date, qualification, comments, tripId)
    try {
        const newRev = await postReview(userId, driverId, date, qualification, comments, tripId);

        res.status(200).json(newRev);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}