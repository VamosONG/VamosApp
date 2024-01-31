const {Router} = require('express');

const getTripsHandler = require('../handlers/tripHandlers/getTripsHandler')
const postTripHandler = require('../handlers/tripHandlers/postTripHandler')
const updateTripHandler = require('../handlers/tripHandlers/updateTripHandler')
const deleteTripHandler = require('../handlers/tripHandlers/deleteTripHandler')

const getUsersHandler = require('../handlers/userHandlers/getUsersHandler')
const postUserHandler = require('../handlers/userHandlers/postUserHandler')
const updateUserHandler = require('../handlers/userHandlers/updateUserHandler')
const deleteUserHandler = require('../handlers/userHandlers/deleteUserHandler')
const getUserByIdHandler = require('../handlers/userHandlers/getUserByIdHandler')
const getUserByEmailHandler = require('../handlers/userHandlers/getUserByEmailHandler')

const getDriversHandler = require('../handlers/driverHandlers/getDriversHandler')
const postDriverHandler = require('../handlers/driverHandlers/postDriverHandler')
const updateDriverHandler = require('../handlers/driverHandlers/updateDriverHandler')
const deleteDriverHandler = require('../handlers/driverHandlers/deleteDriverHandler')

const getAirportsHandler = require('../handlers/airportsHandlers/getAirportsHandler')
const postAirportHandler = require('../handlers/airportsHandlers/postAirportHandler')
const updateAirportHandler = require('../handlers/airportsHandlers/updateAirportHandler')
const deleteAirportHandler = require('../handlers/airportsHandlers/deleteAirportHandler')

const getZonesHandler = require('../handlers/zonesHandlers/getZonesHandler')
const postZoneHandler = require('../handlers/zonesHandlers/postZoneHandler')
const updateZoneHandler = require('../handlers/zonesHandlers/updateZoneHandler')
const deleteZoneHandler = require('../handlers/zonesHandlers/deleteZoneHandler')

const getReviewsHandler = require('../handlers/reviewsHandlers/getReviewsHandler')
const postReviewHandler = require('../handlers/reviewsHandlers/postReviewHandler')
const updateReviewHandler = require('../handlers/reviewsHandlers/updateReviewHandler')
const deleteReviewHandler = require('../handlers/reviewsHandlers/deleteReviewHandler')

const getAdminsHandler = require('../handlers/adminHandlers/getAdminsHandler')
const deleteAdminHandler = require('../handlers/adminHandlers/deleteAdminHandler')

const getPriceHandler = require('../handlers/pricesHandlers/getPriceHandler')
const postPriceHandler = require('../handlers/pricesHandlers/postPriceHandler')
const updatePriceHandler = require('../handlers/pricesHandlers/updatePriceHandler')
const deletePriceHandler = require('../handlers/pricesHandlers/deletePriceHandler')
const filterPricesHandler = require('../handlers/filtersHandlers/filterPricesHandler');

const createOfferHandler = require('../handlers/filtersHandlers/createOfferHandler');
const getFilteredDriversHandler = require('../handlers/filtersHandlers/getFilteredDriversHandler');
const getReservesHandler = require('../handlers/filtersHandlers/getReservesHandler');
const doReserveHandler = require('../handlers/utilsHandlers/doReserveHandler');
const setDriverHandler = require('../handlers/utilsHandlers/setDriverHandler');
const getTripsCompletedHandler = require('../handlers/filtersHandlers/getTripsCompletedHandler');
const getTripsPendingHandler = require('../handlers/filtersHandlers/getTripsPendingHandler');
const filterTripsHandler = require('../handlers/filtersHandlers/filterTripsHandler');
const searchDriversHandler = require('../handlers/filtersHandlers/searchDriversHandler');

const postPreference = require('../controllers/mercadoPagoController/postPreference');
const {createOrder, receiveWebhook} = require('../controllers/mercadoPagoController/paymentController')
const {success} = require('../controllers/mercadoPagoController/backUrlsController')

const getTripsByIdHandler = require('../handlers/tripHandlers/getTripsByIdHandler');
const sendMailHandler = require('../utils/mailing/sendMailHandler');
const deleteLogic = require('../handlers/driverHandlers/setInactiveDriverHandler');
const deleteLogicDrivers = require('../handlers/driverHandlers/setInactiveDriverHandler');
const updateUserAdminHandler = require('../handlers/userHandlers/updateUserAdminHandler');
const deleteLogicUserHandler = require('../handlers/userHandlers/deleteLogicUserHandler');

const router = Router();

router.get('/trips', getTripsHandler);
router.post('/trips/create', postTripHandler);
router.put('/trips/update', updateTripHandler);
router.delete('/trips', deleteTripHandler);

router.get('/user/email', getUserByEmailHandler); //Busca un usuario por Email.
router.get('/user/:id', getUserByIdHandler); //Busca un usuario por ID.
router.get('/user', getUsersHandler);
router.delete('/user', deleteUserHandler);
router.post('/user/create', postUserHandler);
router.patch('/user/update/:id', updateUserHandler);
router.patch('/user/admin/:id', updateUserAdminHandler); //Ruta para convertir admin y viceversa.
router.patch('/user/logic/:id', deleteLogicUserHandler);

//Cambio a metodo PATCH: Mas versatil para actulizar campos individualmente.
//Add ID al final para recibirlo por params.
router.get('/drivers', getDriversHandler);
router.post('/drivers/create', postDriverHandler);
//Borrado logico
router.patch('/drivers/logic/:id', deleteLogicDrivers);
router.patch('/drivers/update/:id', updateDriverHandler);
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
router.post('/reviews/create', postReviewHandler);//
router.put('/reviews/update', updateReviewHandler);
router.delete('/reviews', deleteReviewHandler);

router.get('/dashboard/admin', getAdminsHandler);
router.delete('/dashboard/admin', deleteAdminHandler);

router.get('/prices', getPriceHandler);
router.post('/price/create', postPriceHandler);
router.put('/price/update', updatePriceHandler);
router.delete('/price', deletePriceHandler);
router.post('/price/filter', filterPricesHandler);

router.post('/offer/create', createOfferHandler);
router.post('/drivers/filter', getFilteredDriversHandler);//
router.get('/trips/reserves', getReservesHandler);
router.post('/trips/reserves/create', doReserveHandler);
router.put('/trips/reserves/update',setDriverHandler);
router.get('/trips/completed', getTripsCompletedHandler);//
router.get('/trips/pending', getTripsPendingHandler);
router.post('/trips/filters', filterTripsHandler);
router.post('/drivers/search', searchDriversHandler);

router.get('/trips/tripId/:id', getTripsByIdHandler)

router.post('/send-mail', sendMailHandler)

router.post('/mepago/create-order', createOrder);
router.get('/mepago/success',success);
// router.get('/mepago/fail', fail);
// router.get('/mepago/pending', pending);
router.post('/mepago/webhook', receiveWebhook);

module.exports = router;

