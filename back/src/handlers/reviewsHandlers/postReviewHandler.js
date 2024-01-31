const postReview = require('../../controllers/reviewsControllers/postReview');

module.exports = async (req, res) => {
    const { userId, driverId, date, qualification, comments } = req.body;
    
    try {
        const newRev = await postReview(userId, driverId, date, qualification, comments);

        res.status(200).json(newRev);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}