const { Op } = require('sequelize');
const { Driver, Review } = require('../../dataBase')

const getReviews = async (req, res) => {

    try {
        const { name } = req.query;


        if (name) {

            const driverName = await Driver.findAll({ 
                where: {
                    [Op.or]:[
                        { forename: { [Op.iLike]: `%${name}%` } }, 
                        { surname: { [Op.iLike]: `%${name}%` } } 
                        
                    ]
                  },
                  include: ['reviews']
                })
                    

            const driverReview = driverName.map(driver => ({
                // reviews: driver.reviews,
                // qualification: driver.Reviews.map((review)=>review.qualification),
                // date: driver.Reviews.map((review)=>review.date),
                // comments: driver.Reviews.map((review)=>review.comments)
                reviews: driver.reviews.map(review => ({
                    qualification: review.qualification,
                    date: review.date,
                    comments: review.comments
                }))
            }))


            if (driverReview.length === 0) return res.status(404).send({ Error: 'Driver not found' })


            return res.status(200).json(driverReview);

        }


        else {
            const allDrivers = await Driver.findAll({
                include: ['reviews']
              })
            
            res.status(200).json(allDrivers.map(driver => ({
                // reviews: driver.reviews,
                // qualification: driver.Reviews.map((review)=>review.qualification),
                // date: driver.Reviews.map((review)=>review.date),
                // comments: driver.Reviews.map((review)=>review.comments)
                reviews: driver.reviews.map(review => ({
                    qualification: review.qualification,
                    date: review.date,
                    comments: review.comments
                }))
            })))

        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { getReviews }