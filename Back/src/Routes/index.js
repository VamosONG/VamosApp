const {Router} = require('express');

const router = Router();

router.get('/trips', getTripsHandler);
router.post('/trips/create', postTripHandler);
router.put('/trips/update', updateTripHandler);
router.delete('/trips', deleteTripHandler);

router.get('/user', getUsersHandler);
router.post('/user/create', postUserHandler);
router.put('/user/update', updateUserHandler);
router.delete('/user', deleteUserHandler);

router.get('/drivers', getDriversHandler);
router.post('/drivers/create', postDriverHandler);
router.put('/drivers/update', updateDriverHandler);
router.delete('/drivers', deleteDriverHandler);

router.get('/airports', getAirportsHandler);
router.post('/airports/create', postAirportHandler);
router.put('/airports/update', updateAirportHandler);
router.delete('/airports', deleteAirportHandler);

router.get('/zones', getZonesHandler);
router.post('/zones/create', postZoneHandler);
router.put('/zones/update', updateZoneHandler);
router.delete('/zones', deleteZoneHandler);

router.get('/reviews', getReviewsHandler);
router.post('/reviews/create', postReviewHandler);
router.put('/reviews/update', updateReviewHandler);
router.delete('/reviews', deleteReviewHandler);

router.get('/dashboard/admin', getAdminsHandler);
router.post('/dashboard/admin/create', postAdminHandler);
router.put('/dashboard/admin/update', updateAdminHandler);
router.delete('/dashboard/admin', deleteAdminHandler);



