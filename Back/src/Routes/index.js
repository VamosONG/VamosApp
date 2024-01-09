const {Router} = require('express');

const router = Router();

router.get('/trips', getTripsHandler);
router.post('/trips/create', postTripHandler);
router.put('/trips/update', updateTripHandler);
router.delete('/trips', deleteTripHandler);

router.get('/user', getUserHandler);
router.post('/user/create', postUserHandler);
router.put('/user/update', updateUserHandler);
router.delete('/user', deleteUserHandler);

router.get('/drivers', getDriversHandler);
router.post('/drivers/create', postDriverHandler);
router.put('/drivers/update', updateDriverHandler);
router.delete('/drivers', deleteDriverHandler);

router.get('/airports', getAirportsHandler);
router.post('/airports/create', postAirportsHandler);
router.put('/airports/update', updateAirportsHandler);
router.delete('/airports', deleteAirportsHandler);

router.get('/zones', getZonesHandler);
router.post('/zones/create', postZonesHandler);
router.put('/zones/update', updateZonesHandler);
router.delete('/zones', deleteZonesHandler);

router.get('/dashboard/admin', getAdminsHandler);
router.post('/dashboard/admin/create', postAdminsHandler);
router.put('/dashboard/admin/update', updateAdminsHandler);
router.delete('/dashboard/admin', deleteAdminsHandler);



