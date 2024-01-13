const {Router} = require('express');

const getTripsHandler = require('../Handlers/TripHandlers/getTripsHandler')
const postTripHandler = require('../Handlers/TripHandlers/postTripHandler')
const updateTripHandler = require('../Handlers/TripHandlers/updateTripHandler')
const deleteTripHandler = require('../Handlers/TripHandlers/deleteTripHandler')
const getUsersHandler = require('../Handlers/UserHandlers/getUsersHandler')
const postUserHandler = require('../Handlers/UserHandlers/postUserHandler')
const updateUserHandler = require('../Handlers/UserHandlers/updateUserHandler')
const deleteUserHandler = require('../Handlers/UserHandlers/deleteUserHandler')
const getDriversHandler = require('../Handlers/DriverHandlers/getDriversHandler')
const postDriverHandler = require('../Handlers/DriverHandlers/postDriverHandler')
const updateDriverHandler = require('../Handlers/DriverHandlers/updateDriverHandler')
const deleteDriverHandler = require('../Handlers/DriverHandlers/deleteDriverHandler')
const getAirportsHandler = require('../Handlers/AirportsHandlers/getAirportsHandler')
const postAirportHandler = require('../Handlers/AirportsHandlers/postAirportHandler')
const updateAirportHandler = require('../Handlers/AirportsHandlers/updateAirportHandler')
const deleteAirportHandler = require('../Handlers/AirportsHandlers/deleteAirportHandler')
const getZonesHandler = require('../Handlers/ZonesHandlers/getZonesHandler')
const postZoneHandler = require('../Handlers/ZonesHandlers/postZoneHandler')
const updateZoneHandler = require('../Handlers/ZonesHandlers/updateZoneHandler')
const deleteZoneHandler = require('../Handlers/ZonesHandlers/deleteZoneHandler')
const getReviewsHandler = require('../Handlers/ReviewsHandlers/getReviewsHandler')
const postReviewHandler = require('../Handlers/ReviewsHandlers/postReviewHandler')
const updateReviewHandler = require('../Handlers/ReviewsHandlers/updateReviewHandler')
const deleteReviewHandler = require('../Handlers/ReviewsHandlers/deleteReviewHandler')
const getAdminsHandler = require('../Handlers/AdminHandlers/getAdminsHandler')
const postAdminHandler = require('../Handlers/AdminHandlers/postAdminHandler')
const updateAdminHandler = require('../Handlers/AdminHandlers/updateAdminHandler')
const deleteAdminHandler = require('../Handlers/AdminHandlers/deleteAdminHandler')

const router = Router();

router.get('/trips', getTripsHandler);
router.post('/trips/create', postTripHandler);
router.put('/trips/update/', updateTripHandler);
router.delete('/trips/', deleteTripHandler);

router.get('/user', getUsersHandler);
router.post('/user/create', postUserHandler);
router.put('/user/update/:id', updateUserHandler);
router.delete('/user/:id', deleteUserHandler);

router.get('/drivers', getDriversHandler);
router.post('/drivers/create', postDriverHandler);
router.put('/drivers/update/:id', updateDriverHandler);
router.delete('/drivers/:id', deleteDriverHandler);

router.get('/airports', getAirportsHandler);
router.post('/airports/create', postAirportHandler);
router.put('/airports/update/:id', updateAirportHandler);
router.delete('/airports/:id', deleteAirportHandler);

router.get('/zones', getZonesHandler);
router.post('/zones/create', postZoneHandler);
router.put('/zones/update/:id', updateZoneHandler);
router.delete('/zones/:id', deleteZoneHandler);

router.get('/reviews', getReviewsHandler);
router.post('/reviews/create', postReviewHandler);
router.put('/reviews/update/:id', updateReviewHandler);
router.delete('/reviews/:id', deleteReviewHandler);

router.get('/dashboard/admin', getAdminsHandler);
// router.post('/dashboard/admin/create', postAdminHandler);
// router.put('/dashboard/admin/update', updateAdminHandler);
router.delete('/dashboard/admin/:id', deleteAdminHandler);

module.exports = router;

