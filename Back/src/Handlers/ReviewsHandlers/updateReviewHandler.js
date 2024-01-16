const updateReview = require('../../Controllers/reviewsControllers/updateReview');

module.exports = async (req, res) => {
    try {
        const { id, driver, qualification, comments } = req.body; 
        
        const updRev = await updateReview(id, { driver, qualification, comments });

        if (updRev) {
            res.status(200).json(updRev);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};